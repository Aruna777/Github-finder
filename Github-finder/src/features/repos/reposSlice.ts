import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GithubApi } from "../../api/GithubApi";
import type { Repository } from "../../api/GithubApi";

interface ReposState {
  data: Repository[];
  loading: boolean;
  error: string | null;
}

const initialState: ReposState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchRepositories = createAsyncThunk(
  "repos/fetchRepositories",
  async (username: string, { rejectWithValue }) => {
    try {
      return await GithubApi.getRepositories(username);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch repositories",
      );
    }
  },
);

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    clearRepos: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearRepos } = reposSlice.actions;
export default reposSlice.reducer;
