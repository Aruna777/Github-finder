import type { GitHubUser } from "../api/GithubApi";

interface StatsBarProps {
  user: GitHubUser;
}

export function StatsBar({ user }: StatsBarProps) {
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="label">Repositories</span>
        <span className="value">{user.public_repos}</span>
      </div>
      <div className="stat">
        <span className="label">Followers</span>
        <span className="value">{user.followers}</span>
      </div>
      <div className="stat">
        <span className="label">Following</span>
        <span className="value">{user.following}</span>
      </div>
      <div className="stat">
        <span className="label">Member Since</span>
        <span className="value">{new Date(user.created_at).getFullYear()}</span>
      </div>
    </div>
  );
}
