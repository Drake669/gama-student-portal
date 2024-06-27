import { baseSlice } from "@/features/baseSlice";

const getCategories = baseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/course-categories",
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = getCategories;
