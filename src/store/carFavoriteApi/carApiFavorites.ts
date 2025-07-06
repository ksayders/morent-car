import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {CardType} from "../../components/mainPage/main/card/types/card-types";

export const carApiFavorites = createApi({
    reducerPath: 'carApiFavorites',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://68655caf5b5d8d033980e30c.mockapi.io/'
    }),
    tagTypes: ['Favorites'],
    endpoints: (builder) => ({
        getFavoriteCars: builder.query<CardType[], string | void>({
            query: (search = '') => ({
                url: 'favorite-car-items',
                params: search ? { name: search } : undefined,
            }),
            providesTags: ['Favorites'],
        }),

        addFavorite: builder.mutation<void, CardType>({
            query: (card) => ({
                url: 'favorite-car-items',
                method: 'POST',
                body: card,
            }),
            invalidatesTags: ['Favorites'],
        }),

        deleteFavorite: builder.mutation<void, string>({
            query: (id) => ({
                url: `favorite-car-items/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Favorites'],
        }),
    })
})

export const {
    useGetFavoriteCarsQuery,
    useAddFavoriteMutation,
    useDeleteFavoriteMutation
} = carApiFavorites;