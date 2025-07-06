import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {CardType} from "../../components/mainPage/main/card/types/card-types";

export const carApi = createApi({
    reducerPath: 'carApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://68655caf5b5d8d033980e30c.mockapi.io/'
    }),
    endpoints: (builder) => ({
        getCars: builder.query<CardType[], string | void>({
            query: (search = '') => ({
                url: 'car-items',
                params: search ? { name: search } : undefined,
            }),
        }),
    })
})

export const { useGetCarsQuery } = carApi;