import React, { FunctionComponent } from 'react'
import { Message } from 'semantic-ui-react'
import ArticleModel from '../model/ArticleModel'

interface OwnProps {
    articles: ArticleModel[]
}

type Props = OwnProps

const SearchResultsMessage: FunctionComponent<Props> = props => {
    return (
        <div className="p-4 w-full">
            <Message className="w-full">
                <Message.Header>Search Results!</Message.Header>
                <p>
                    {`Found ${props.articles.length} ${
                        props.articles.length === 1 ? 'article' : 'articles'
                    }`}
                </p>
            </Message>
        </div>
    )
}

export default SearchResultsMessage
