import { useState } from "react";
import { useSelector } from "react-redux";
import "../pages/Profilepage.css";
import {
  selectRepositories,
  selectReposLoading,
  selectReposError,
} from "../features/repos/reposSelectors";
import {
  selectFollowers,
  selectFollowersLoading,
  selectFollowersError,
} from "../features/followers/followersSelectors";
import { RepoCard } from "./Repocard";
import { FollowerCard } from "./Followercard";

export function RepoList() {
  const [activeTab, setActiveTab] = useState<"repos" | "followers">("repos");

  const repos = useSelector(selectRepositories);
  const reposLoading = useSelector(selectReposLoading);
  const reposError = useSelector(selectReposError);

  const followers = useSelector(selectFollowers);
  const followersLoading = useSelector(selectFollowersLoading);
  const followersError = useSelector(selectFollowersError);

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "repos" ? "on" : ""}`}
          onClick={() => setActiveTab("repos")}
        >
          Repos
        </div>
        <div
          className={`tab ${activeTab === "followers" ? "on" : ""}`}
          onClick={() => setActiveTab("followers")}
        >
          Followers
        </div>
      </div>

      {activeTab === "repos" && (
        <div className="repo-list">
          {reposLoading && <div>Loading repositories...</div>}
          {reposError && <div>Error: {reposError}</div>}
          {repos.length === 0 && !reposLoading && (
            <div>No repositories found</div>
          )}
          {repos.length > 0 && (
            <div>
              <div className="rname">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* <div className="repos-container">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div> */}
      {activeTab === "followers" && (
        <div className="follower-list">
          {followersLoading && <div>Loading followers...</div>}
          {followersError && <div>Error: {followersError}</div>}
          {followers.length === 0 && !followersLoading && (
            <div>No followers found</div>
          )}
          {followers.length > 0 && (
            <div className="followers-container">
              {followers.map((follower) => (
                <FollowerCard key={follower.id} follower={follower} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
