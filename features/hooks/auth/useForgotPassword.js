import { baseSlice } from "../../baseSlice";

const forgotPassword = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    forgotPassword: build.mutation({
      query: (formData) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useForgotPasswordMutation } = forgotPassword;
