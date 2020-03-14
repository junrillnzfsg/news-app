import request from '../lib/request'
import { apiKey } from '../lib/params'

export const getTopHeadlines = (country: string) =>
    request
        .get('top-headlines', { params: { country, apiKey } })
        .then(response => response.data)
