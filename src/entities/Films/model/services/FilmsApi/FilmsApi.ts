import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const FilmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getFilms: builder.query({query: () => 'movies'}),
        getFilmById: builder.query({query: (id) => `movie?movieId=${id}`}),
        getCinema: builder.query({query: () => `cinemas`}),
        getCinemaById: builder.query({query: (id) => `movies?cinemaId=${id}`})
    })
});

export const {useGetFilmsQuery, useGetFilmByIdQuery, useGetCinemaQuery, useGetCinemaByIdQuery} = FilmsApi;