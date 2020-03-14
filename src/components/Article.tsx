import React, { FunctionComponent } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ArticleModel from '../model/ArticleModel'

type Props = ArticleModel

const Article: FunctionComponent<Props> = props => {
    return (
        <Grid>
            {props.urlToImage ? (
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src={props.urlToImage} />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <h4>
                            <a target="_blank" href={props.url}>
                                {props.title}
                            </a>
                        </h4>
                        <p>{props.description}</p>
                    </Grid.Column>
                </Grid.Row>
            ) : (
                <Grid.Row>
                    <Grid.Column>
                        <h4>
                            <a target="_blank" href={props.url}>
                                {props.title}
                            </a>
                        </h4>
                        <p>{props.description}</p>
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    )
}

export default Article
