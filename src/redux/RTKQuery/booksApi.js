import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBaseQuery';

export const booksApi = createApi({
  reducerPath: 'booksRTK',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://reading-marathons-backend.onrender.com/api',
  }),
  tagTypes: ['Books', 'BookById', 'Trainings', 'TrainingById'],
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => ({ url: '/books', method: 'GET' }),
      providesTags: ['Books'],
    }),
    addBook: builder.mutation({
      query: values => ({ url: '/books', method: 'POST', data: values }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: id => ({ url: `/books/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Books', 'Trainings', 'TrainingById'],
    }),
    getBookById: builder.query({
      query: id => ({ url: `/books/${id}`, method: 'GET' }),
      providesTags: ['BookById'],
    }),
    updateBookReview: builder.mutation({
      query: params => ({
        url: `/books/${params.id}/review`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById'],
    }),
    updateBook: builder.mutation({
      query: params => ({
        url: `/books/${params.id}/update`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById'],
    }),
    getTrainings: builder.query({
      query: () => ({ url: '/trainings', method: 'GET' }),
      providesTags: ['Trainings'],
    }),
    getTrainingById: builder.query({
      query: id => ({ url: `/trainings/${id}`, method: 'GET' }),
      providesTags: ['TrainingById'],
    }),
    addTraining: builder.mutation({
      query: values => ({ url: '/trainings', method: 'POST', data: values }),
      invalidatesTags: ['Books', 'BookById', 'Trainings', 'TrainingById'],
    }),
    updateTrainingById: builder.mutation({
      query: params => ({
        url: `/trainings/${params.id}/update`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Trainings', 'TrainingById'],
    }),
    updateStatisticById: builder.mutation({
      query: params => ({
        url: `/trainings/${params.id}/statistic`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Trainings', 'TrainingById', 'Books'],
    }),
    deleteTrainingById: builder.mutation({
      query: id => ({ url: `/trainings/${id}`, method: 'DELETE' }),
      invalidatesTags: ['TrainingById'],
    }),  
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
  useUpdateBookMutation,
  useGetTrainingsQuery,
  useGetTrainingByIdQuery,
  useAddTrainingMutation,
  useUpdateTrainingByIdMutation,
  useUpdateStatisticByIdMutation,
  useDeleteTrainingByIdMutation,
} = booksApi;

