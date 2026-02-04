import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardsSlice";

const appStore = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default appStore;
