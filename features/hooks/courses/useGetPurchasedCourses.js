import { baseSlice } from "@/features/baseSlice";

const getPurchasedCourses = baseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPurchasedCourses: builder.query({
      query: () => "/courses/purchases",
    }),
  }),
  overrideExisting: false,
});

export const { useGetPurchasedCoursesQuery } = getPurchasedCourses;
