import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', '38dc50287bmsh4bed387d626f116p1f14c1jsnc532a124b9cb')
        }
    })
});