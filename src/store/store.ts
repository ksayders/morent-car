import { configureStore } from '@reduxjs/toolkit';
import { carApi } from './carApi/carApi';
import {carApiFavorites} from "./carFavoriteApi/carApiFavorites.ts";
import selectedCarReducer from "./selectedCarSlice/selectedCarSlice.ts";

export const store = configureStore({
    reducer: {
        selectedCar: selectedCarReducer,
        [carApi.reducerPath]: carApi.reducer,
        [carApiFavorites.reducerPath]: carApiFavorites.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(carApi.middleware)
            .concat(carApiFavorites.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;