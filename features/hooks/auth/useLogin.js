import { baseSlice } from "../../baseSlice";

const login = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = login;
