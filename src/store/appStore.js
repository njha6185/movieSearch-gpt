import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./GPTSlice"
import appConfigReducer from "./appConfigSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    appConfig: appConfigReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default appStore;
