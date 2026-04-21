import { useSelector } from "react-redux";
import {
  selectUserData,
  selectUserLoading,
  selectUserError,
} from "../features/user/userSelectors";
import { UserCard } from "../components/Usercard";
import { StatsBar } from "../components/Statsbar";
import { RepoList } from "../components/Repolist";
import { ErrorMessage } from "../components/Errormessage";
import { SearchBar } from "../components/Searchbar";

export function ProfilePage() {
  const user = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  return (
    <div className="profile-page">
      <SearchBar />

      {loading && <div>Loading...</div>}

      {error && <ErrorMessage message={error} />}

      {user && (
        <>
          <UserCard user={user} />
          <StatsBar user={user} />
          <RepoList />
        </>
      )}
    </div>
  );
}
