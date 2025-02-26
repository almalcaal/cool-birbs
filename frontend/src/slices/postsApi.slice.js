import { POSTS_URL } from "../constants.js";
import { apiSlice } from "./api.slice.js";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
