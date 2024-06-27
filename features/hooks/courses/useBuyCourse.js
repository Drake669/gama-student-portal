import { baseSlice } from "../../baseSlice";

const buyCourse = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    buyCourse: build.mutation({
      query: (formData) => ({
        url: "/courses/buy",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useBuyCourseMutation } = buyCourse;
