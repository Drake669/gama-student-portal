import { baseSlice } from "../../baseSlice";

const refreshTokens = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    refreshTokens: build.mutation({
      query: (formData) => ({
        url: "/auth/refresh",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRefreshTokensMutation } = refreshTokens;
