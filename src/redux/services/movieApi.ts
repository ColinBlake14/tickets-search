import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getMovies: builder.query<Array<MovieI>, string>({ query: () => "movies" }),
    getMovie: builder.query<MovieI, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
    getCommentsById: builder.query<Array<CommentI>, string>({ query: (movieId) => `reviews?movieId=${movieId}` }),
  })
})

export const { useGetMoviesQuery, useGetMovieQuery, useGetCommentsByIdQuery } = movieApi;
