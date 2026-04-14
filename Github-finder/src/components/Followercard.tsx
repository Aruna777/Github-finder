import type { Follower } from "../api/GithubApi";

interface FollowerCardProps {
  follower: Follower;
}

export function FollowerCard({ follower }: FollowerCardProps) {
  return (
    <div className="follower-card">
      <img
        src={follower.avatar_url}
        alt={follower.login}
        className="follower-avatar"
      />
      <p>{follower.login}</p>
      <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}
