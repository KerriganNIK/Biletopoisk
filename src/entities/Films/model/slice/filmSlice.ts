import {Film, Films} from "@/entities/Films/model/type/film";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Films = {
    films: [],
}

const filmsSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setFilms(state, action: PayloadAction<Film>) {
            state.films.push(action.payload);
        }
    }
});

export const { setFilms } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
