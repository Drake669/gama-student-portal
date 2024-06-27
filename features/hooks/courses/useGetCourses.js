import { baseSlice } from "@/features/baseSlice";

const getCourses = baseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoursesQuery } = getCourses;
