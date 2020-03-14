import ArticleModel from './ArticleModel'

export default interface ApiResponseModel {
    status: string
    totalResults: number
    articles: ArticleModel[]
}
