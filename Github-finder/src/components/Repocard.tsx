import type { Repository } from "../api/GithubApi";

interface RepoCardProps {
  repo: Repository;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="repo-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description || "No description"}</p>
      <div className="repo-details">
        {repo.language && <span className="language">{repo.language}</span>}
        <span className="stars">⭐ {repo.stargazers_count}</span>
        <span className="forks">🍴 {repo.forks_count}</span>
      </div>
    </div>
  );
}
