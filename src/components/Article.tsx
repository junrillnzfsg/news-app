import React, { FunctionComponent } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ArticleModel from '../model/ArticleModel'

type Props = ArticleModel

const Article: FunctionComponent<Props> = props => {
    const placeholderImage = 'https://placeimg.com/640/480/people'
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={props.urlToImage || placeholderImage} />
                </Grid.Column>
                <Grid.Column width={13}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Article
