import useSWR from "swr";
import ActivityCard from "./ActivityCard";

export default function ActivityList({ liked, toggleFavorite }) {
  const { data, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error to load the Page.</p>;

  return (
    <>
      <h3>Activities:</h3>
      <ul>
        {data.map((activity) => (
          <ActivityCard
            liked={liked}
            toggleFavorite={toggleFavorite}
            key={activity._id}
            {...activity}
          />
        ))}
      </ul>
    </>
  );
}
