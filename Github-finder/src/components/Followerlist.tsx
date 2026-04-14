import { useSelector } from "react-redux";
import {
  selectFollowers,
  selectFollowersLoading,
  selectFollowersError,
} from "../features/followers/followersSelectors";
import { FollowerCard } from "./Followercard";

export function FollowerList() {
  const followers = useSelector(selectFollowers);
  const loading = useSelector(selectFollowersLoading);
  const error = useSelector(selectFollowersError);

  if (loading) return <div>Loading followers...</div>;
  if (error) return <div>Error: {error}</div>;
  if (followers.length === 0) return <div>No followers found</div>;

  return (
    <div className="follower-list">
      <h2>Followers ({followers.length})</h2>
      <div className="followers-container">
        {followers.map((follower) => (
          <FollowerCard key={follower.id} follower={follower} />
        ))}
      </div>
    </div>
  );
}
