import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GithubApi } from "../../api/GithubApi";
import type { GitHubUser } from "../../api/GithubApi";

interface UserState {
  data: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (username: string, { rejectWithValue }) => {
    try {
      return await GithubApi.getUser(username);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user",
      );
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
