import { configureStore } from "@reduxjs/toolkit";

import userNavigationSlice from "./slices/user-navigation.slice";

export const store = configureStore({
  reducer: {
    nav: userNavigationSlice,
  },
});
