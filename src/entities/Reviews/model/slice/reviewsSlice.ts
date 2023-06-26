import {Reviews} from "@/entities/Reviews/model/type/reviews";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Reviews = {
    reviews: [],
}

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action: PayloadAction<Reviews>) => {
            state.reviews = action.payload.reviews;
        }
    }
});

export const { setReviews } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;