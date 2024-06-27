import { baseSlice } from "@/features/baseSlice";

const getCourse = baseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: (id) => `/courses/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCourseQuery } = getCourse;
