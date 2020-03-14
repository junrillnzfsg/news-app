import request from '../lib/request'
import { apiKey } from '../utils/params'

export const getTopHeadlines = (country: string) =>
    request
        .get('top-headlines', { params: { country, apiKey } })
        .then(response => response.data)

export const searchEverything = (query: string) =>
    request
        .get('everything', { params: { q: query, apiKey } })
        .then(response => response.data)
