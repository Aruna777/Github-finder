import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GithubApi } from "../../api/GithubApi";
import type { Follower } from "../../api/GithubApi";

interface FollowersState {
  data: Follower[];
  loading: boolean;
  error: string | null;
}

const initialState: FollowersState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFollowers = createAsyncThunk(
  "followers/fetchFollowers",
  async (username: string, { rejectWithValue }) => {
    try {
      return await GithubApi.getFollowers(username);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch followers",
      );
    }
  },
);

const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    clearFollowers: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFollowers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearFollowers } = followersSlice.actions;
export default followersSlice.reducer;
