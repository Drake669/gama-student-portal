import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession, signOut } from "next-auth/react";

const getBaseUrl = () => {
  if (
    typeof window !== "undefined" &&
    window._env_ &&
    window._env_.NEXT_PUBLIC_BASE_URL
  ) {
    return window._env_.NEXT_PUBLIC_BASE_URL;
  }
  return process.env.NEXT_PUBLIC_BASE_URL; // Fallback URL if `window` is not defined
};

const prepareHeaders = async (headers, api) => {
  if (typeof window !== "undefined") {
    const session = await getSession();
    if (session && session.token) {
      headers.set("Authorization", `Bearer ${session.token}`);
    }
  }
  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  prepareHeaders,
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    result.error.status === 401 &&
    api.endpoint !== "login" &&
    api.endpoint !== "register"
  ) {
    // Clear the session and redirect to login
    if (typeof window !== "undefined") {
      await signOut({ callbackUrl: "/login" });
    }
  }
  return result;
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
