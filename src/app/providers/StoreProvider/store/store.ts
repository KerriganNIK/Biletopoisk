import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {filmsReducer} from "@/entities/Films";
import {FilmsApi} from "@/entities/Films/model/services/FilmsApi/FilmsApi";
import {reviewsReducer} from "@/entities/Reviews/model/slice/reviewsSlice";
import {ReviewsApi} from "@/entities/Reviews/model/services/ReviewsApi/ReviewsApi";
import {counterReducer} from "@/entities/Counter";

const rootReducer = combineReducers({
    films: filmsReducer,
    reviews: reviewsReducer,
    counter: counterReducer,
    [FilmsApi.reducerPath]: FilmsApi.reducer,
    [ReviewsApi.reducerPath]: ReviewsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(FilmsApi.middleware)
            .concat(ReviewsApi.middleware),
});