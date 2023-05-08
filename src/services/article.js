import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const RapidAPIKey = import.meta.env.VITE_RAPID_API_KEY
export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key', RapidAPIKey)
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com' )

            return headers
        }
    }),
    endpoints:(builder) => ({
        getSummery : builder.query({
            query:(params)=>`summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const {useLazyGetSummeryQuery} =  articleApi

