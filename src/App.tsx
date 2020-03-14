import React, { SyntheticEvent } from 'react'
import { Container, DropdownProps, Grid, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './rootReducer'

import Select from './components/Select'
import countryOptions from './data/countryOptions'
import newsCategory from './data/newsCategory'
import SearchResultsMessage from './components/SearchResultsMessage'
import Article from './components/Article'
import { fetchTopHeadlines } from './reducers/newsReducer'

function App() {
    const dispatch = useDispatch()
    const { articles } = useSelector((state: RootState) => state.news)
    const handleCountryChange = (
        e: SyntheticEvent,
        formValue: DropdownProps
    ) => {
        const value = formValue.value || ''
        dispatch(fetchTopHeadlines(value.toString()))
    }
    return (
        <Container className="p-8">
            <h1 className="text-center pb-8">My News App</h1>
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
                            onChange={handleCountryChange}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Input
                            icon="search"
                            placeholder="Search..."
                            className="w-full"
                        />
                    </Grid.Column>
                </Grid.Row>
                <SearchResultsMessage articles={articles} />
                {articles.map(article => (
                    <Article {...article} />
                ))}
            </Grid>
        </Container>
    )
}

export default App
