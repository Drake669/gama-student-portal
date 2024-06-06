import { baseSlice } from "../../baseSlice";

const sendVerification = baseSlice.injectEndpoints({
  endpoints: (build) => ({
    sendVerification: build.mutation({
      query: (formData) => ({
        url: "/auth/send-email-verification",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendVerificationMutation } = sendVerification;
