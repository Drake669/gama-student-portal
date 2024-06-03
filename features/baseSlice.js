import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBaseUrl = () => {
  if (typeof window !== "undefined" && window._env_ && window._env_.API_URL) {
    return window._env_.API_URL;
  }
  return "https:web.builtaccounting.com/"; // Fallback URL if `window` is not defined
};

const prepareHeaders = (headers, api) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("sign-token");
    if (token) {
      const BearerToken = JSON.parse(token);
      headers.set("Authorization", `Bearer ${BearerToken?.access_token}`);
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
  if (result.error && result.error.status === 401) {
    // log user out
    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.assign("/login");
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
