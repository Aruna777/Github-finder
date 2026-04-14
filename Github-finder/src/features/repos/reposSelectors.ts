import type { RootState } from "../../app/Store";

export const selectRepositories = (state: RootState) => state.repos.data;
export const selectReposLoading = (state: RootState) => state.repos.loading;
export const selectReposError = (state: RootState) => state.repos.error;
