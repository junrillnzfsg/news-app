import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Container, DropdownProps, Grid, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './rootReducer'
import Select from './components/Select'
import countryOptions from './data/countryOptions'
import newsCategory from './data/newsCategory'
import SearchResultsMessage from './components/SearchResultsMessage'
import Article from './components/Article'
import {
    fetchSearchEverything,
    fetchTopHeadlines,
} from './reducers/newsReducer'
import { SEARCH_CATEGORY } from './constants'
import toast from './lib/toast'

function App() {
    const dispatch = useDispatch()
    let searchTimeout: number | null = null
    const [category, setCategory] = useState(SEARCH_CATEGORY.TOP_HEADLINES)
    const [country, setCountry] = useState('')
    const { articles } = useSelector((state: RootState) => state.news)

    const handleCountryChange = (
        e: SyntheticEvent,
        formValue: DropdownProps
    ) => {
        const value = formValue.value || ''
        setCountry(value.toString())
        if (category === SEARCH_CATEGORY.TOP_HEADLINES)
            dispatch(fetchTopHeadlines(value.toString()))
        else
            toast.warn(
                'To retrieve articles by country "Top Headlines" should be selected',
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            )
    }

    const handleSearchCategory = (
        e: SyntheticEvent,
        formValue: DropdownProps
    ) => {
        const value = formValue.value || ''
        setCategory(value.toString())
        if (value.toString() === SEARCH_CATEGORY.TOP_HEADLINES && country)
            dispatch(fetchTopHeadlines(country))
    }

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist()
        if (searchTimeout) clearTimeout(searchTimeout)
        // @ts-ignore
        searchTimeout = setTimeout(() => {
            if (category === SEARCH_CATEGORY.EVERYTHING) {
                dispatch(fetchSearchEverything(e.target.value))
            } else {
                toast.warn(
                    'To search articles "Everything" should be selected',
                    {
                        position: toast.POSITION.TOP_RIGHT,
                    }
                )
            }
        }, 1000)
    }

    return (
        <Container className="p-8">
            <h1 className="text-center pb-8">
                <a href="/">My News App</a>
            </h1>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Select
                            placeholder="Select Country"
                            options={countryOptions}
                            onChange={handleCountryChange}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Select
                            placeholder="Select Category"
                            options={newsCategory}
                            onChange={handleSearchCategory}
                            value={category}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Input
                            fluid
                            icon="search"
                            placeholder="Search..."
                            onChange={handleSearchInput}
                        />
                    </Grid.Column>
                </Grid.Row>
                <SearchResultsMessage articles={articles} />
                {articles.map((article, index) => (
                    <Article key={index} {...article} />
                ))}
            </Grid>
        </Container>
    )
}

export default App
