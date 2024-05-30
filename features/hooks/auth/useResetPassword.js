import { baseSlice } from "../../baseSlice";

const resetPassword = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    resetPassword: build.mutation({
      query: (formData) => ({
        url: "/auth/refresh",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useResetPasswordMutation } = resetPassword;
