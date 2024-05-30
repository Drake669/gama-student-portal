import { baseSlice } from "../../baseSlice";

const verifyEmail = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    verifyEmail: build.mutation({
      query: (formData) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useVerifyEmailMutation } = verifyEmail;
