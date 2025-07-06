import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {CardType} from "../../components/mainPage/main/card/types/card-types";

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('selectedCar');
        if (!serializedState) return null;
        return JSON.parse(serializedState);
    } catch {
        return null;
    }
};

type SelectedCarState = {
    car: CardType | null;
};

const savedState = loadFromLocalStorage();

const initialState: SelectedCarState = savedState ?? {
    car: null,
};

const selectedCarSlice = createSlice({
    name: 'selectedCar',
    initialState,
    reducers: {
        setSelectedCar(state, action: PayloadAction<CardType>) {
            state.car = action.payload;
            localStorage.setItem('selectedCar', JSON.stringify(state));
        },
    },
});

export const { setSelectedCar } = selectedCarSlice.actions;
export default selectedCarSlice.reducer;