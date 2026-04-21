import type { GitHubUser } from "../api/GithubApi";
import "../pages/Profilepage.css";

interface StatsBarProps {
  user: GitHubUser;
}

export function StatsBar({ user }: StatsBarProps) {
  return (
    <div className="stats">
      <div className="stat">
        <div className="snum">{user.public_repos}</div>
        <div className="slbl">Repos</div>
      </div>
      <div className="stat">
        <div className="snum">{user.followers}</div>
        <div className="slbl">Followers</div>
      </div>
      <div className="stat">
        <div className="snum">{user.following}</div>
        <div className="slbl">Following</div>
      </div>
    </div>
  );
}
