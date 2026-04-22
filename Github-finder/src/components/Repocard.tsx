import type { Repository } from "../api/GithubApi";

interface RepoCardProps {
  repo: Repository;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="repo">
      <div className="rname">{repo.name}</div>
      <div className="rdesc">{repo.description || "No description"}</div>
      <div className="repo-details">
        {repo.language && <span className="language">{repo.language}</span>}
        <span className="stars">⭐ {repo.stargazers_count}</span>
        <span className="forks">🍴 {repo.forks_count}</span>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  );
}
