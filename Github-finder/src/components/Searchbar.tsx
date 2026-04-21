import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, clearUser } from "../features/user/userSlice";
import { fetchRepositories, clearRepos } from "../features/repos/reposSlice";
import {
  fetchFollowers,
  clearFollowers,
} from "../features/followers/followersSlice";
import type { AppDispatch } from "../app/Store";
import "../pages/Profilepage.css";

export function SearchBar() {
  const [username, setUsername] = useState("");
  const [isopen, setOpen] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setOpen(false);
      dispatch(fetchUser(username));
      dispatch(fetchRepositories(username));
      dispatch(fetchFollowers(username));
    }
  };

  const handleBack = () => {
    setOpen(true);
    setUsername("");
    dispatch(clearUser());
    dispatch(clearRepos());
    dispatch(clearFollowers());
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="body">
        <div className="h1">GitHub Finder</div>
        <div className="sub">Search any public profile</div>

        {isopen ? (
          <div className="srow">
            <input
              type="text"
              placeholder="Search GitHub user..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "min(600px, 100%)",
                padding: "8px 12px",
                border: "0.5px solid var(--color-border-secondary)",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
            <button className="sbtn" type="submit">
              Search
            </button>
          </div>
        ) : (
          <div className="nav">
            <div onClick={handleBack} className="back">
              ← Search
            </div>
            <div className="badge-ok">succeeded</div>
          </div>
        )}
      </div>
    </form>
  );
}
