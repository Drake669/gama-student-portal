import { baseSlice } from "../../baseSlice";

const register = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (formData) => ({
        url: "/auth/signup",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation } = register;
