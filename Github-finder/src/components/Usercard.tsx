import type { GitHubUser } from "../api/GithubApi";
import "../pages/Profilepage.css";

interface UserCardProps {
  user: GitHubUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <div className="user-card">
        <div className="user-info">
          <img className="avatar" src={user.avatar_url} alt={user.login} />
          <h2>
            <strong>{user.name || user.login}</strong>
          </h2>
          <ul className="user-details">
            <li>@{user.login}</li>
            {/* {user.bio && (
              <li>
                <strong>Bio:</strong> {user.bio}
              </li>
            )} */}
            {user.location && (
              <li>
                <strong>Location:</strong> {user.location}
              </li>
            )}
            <li>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
