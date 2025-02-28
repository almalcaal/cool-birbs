import { POSTS_URL, UPLOAD_URL } from "../constants.js";
import { apiSlice } from "./api.slice.js";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getPostDetails: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: POSTS_URL,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Post"],
    }),
    uploadPostImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
    upvotePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}/upvote`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Post"],
    }),
    downvotePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}/downvote`,
        method: "PUT",
        credentials: "include", // include credentials if needed
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostDetailsQuery,
  useCreatePostMutation,
  useUploadPostImageMutation,
  useUpvotePostMutation,
  useDownvotePostMutation,
} = postsApiSlice;
