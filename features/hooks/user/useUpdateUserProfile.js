import { baseSlice } from "../../baseSlice";

const updateProfile = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation({
      query: (formData) => ({
        url: "/users/me",
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProfileMutation } = updateProfile;
