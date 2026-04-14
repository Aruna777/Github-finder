import type { GitHubUser } from "../api/GithubApi";

interface UserCardProps {
  user: GitHubUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <p>{user.location}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}
