import { configureStore } from "@reduxjs/toolkit";
import bookFilterSlice from "./bookFilterSlice";
import bookSlice from "./bookSlice";
import courseFilterSlice from "./courseFilterSlice";
import courseSlice from "./courseSlice";
import { baseSlice } from "./baseSlice";

export const store = configureStore({
  reducer: {
    course: courseSlice,
    book: bookSlice,
    courseFilter: courseFilterSlice,
    bookFilter: bookFilterSlice,
    [baseSlice.reducerPath]: baseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseSlice.middleware),
});
