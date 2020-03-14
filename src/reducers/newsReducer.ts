import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ApiResponseModel from '../model/ApiResponseModel'
import ArticleModel from '../model/ArticleModel'
import { AppThunk } from '../store'

import { getTopHeadlines } from '../api/newsAPI'

type CurrentNewsState = {
    articles: ArticleModel[]
    error: string | null
}

let initialState: CurrentNewsState = {
    articles: [],
    error: null,
}
// ========================================
// SLICE
// ========================================
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNewsSuccess(state, action: PayloadAction<ApiResponseModel>) {
            const { articles } = action.payload
            state.articles = articles
            state.error = null
        },
        getNewsError(state, action: PayloadAction<string>) {
            state.articles = []
            state.error = action.payload
        },
    },
})

// ========================================
// ACTIONS
// ========================================
export const { getNewsSuccess, getNewsError } = newsSlice.actions

export default newsSlice.reducer

// ========================================
// THUNK
// ========================================
export const fetchTopHeadlines = (
    country: string
): AppThunk => async dispatch => {
    try {
        const data = await getTopHeadlines(country)
        dispatch(getNewsSuccess(data))
    } catch (err) {
        dispatch(getNewsError(err.toString()))
    }
}
