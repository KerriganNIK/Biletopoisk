import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Film} from '@/entities/Films/model/type/film';
import {CounterSchema} from '@/entities/Counter/model/type/counter';

const initialState: CounterSchema = {
    countFilm: [] = [],
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setFilmCount: (state, action: PayloadAction<{ film: Film; count: number }>) => {
            const { film, count } = action.payload;
            const existingCounterIndex = state.countFilm.findIndex(counter => counter.movie.id === film.id);

            if (existingCounterIndex !== -1) {
                state.countFilm[existingCounterIndex].value = count;
            } else {
                state.countFilm.push({ movie: film, value: count });
            }
        },
        removeFilmCount: (state, action: PayloadAction<string>) => {
            const filmIdToRemove = action.payload;
            const filmIndex = state.countFilm.findIndex((counter) => counter.movie.id === filmIdToRemove);

            if (filmIndex !== -1) {
                state.countFilm.splice(filmIndex, 1);
            }
        },
    },
});

export const { setFilmCount, removeFilmCount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;