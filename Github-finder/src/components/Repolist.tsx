import { useSelector } from "react-redux";
import {
  selectRepositories,
  selectReposLoading,
  selectReposError,
} from "../features/repos/reposSelectors";
import { RepoCard } from "./Repocard";

export function RepoList() {
  const repos = useSelector(selectRepositories);
  const loading = useSelector(selectReposLoading);
  const error = useSelector(selectReposError);

  if (loading) return <div>Loading repositories...</div>;
  if (error) return <div>Error: {error}</div>;
  if (repos.length === 0) return <div>No repositories found</div>;

  return (
    <div className="repo-list">
      <h2>Repositories ({repos.length})</h2>
      <div className="repos-container">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
