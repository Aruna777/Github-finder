import type { RootState } from "../../app/Store";

export const selectFollowers = (state: RootState) => state.followers.data;
export const selectFollowersLoading = (state: RootState) =>
  state.followers.loading;
export const selectFollowersError = (state: RootState) => state.followers.error;
