import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import reposReducer from "../features/repos/reposSlice";
import followersReducer from "../features/followers/followersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
    followers: followersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
