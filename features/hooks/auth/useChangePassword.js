import { baseSlice } from "../../baseSlice";

const changePassword = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (formData) => ({
        url: "/auth/change-password",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useChangePasswordMutation } = changePassword;
