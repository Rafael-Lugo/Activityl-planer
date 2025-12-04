import useSWR from "swr";
import ActivityCard from "./ActivityCard";
import FavoriteButton from "../FavoriteButton";

export default function ActivityList({ liked, toggleLiked }) {
  const { data, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error to load the Page.</p>;

  return (
    <>
      <h3>Activities:</h3>
      <ul>
        {data.map((activity) => (
          <>
            <ActivityCard
              liked={liked}
              toggleLiked={toggleLiked}
              key={activity._id}
              {...activity}
            />
            <FavoriteButton
              liked={liked}
              _id={activity._id}
              toggleLiked={toggleLiked}
            />
          </>
        ))}
      </ul>
    </>
  );
}

