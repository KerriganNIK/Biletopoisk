import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ReviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getReviews: builder.query({query: () => 'reviews'}),
        getReviewById: builder.query({query: (id) => `reviews?movieId=${id}`}),
    })
});

export const {useGetReviewsQuery, useGetReviewByIdQuery} = ReviewsApi;