import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/user/userSlice";
import { fetchRepositories } from "../features/repos/reposSlice";
import { fetchFollowers } from "../features/followers/followersSlice";
import type { AppDispatch } from "../app/Store";

export function SearchBar() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(fetchUser(username));
      dispatch(fetchRepositories(username));
      dispatch(fetchFollowers(username));
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
