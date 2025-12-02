import useSWR from "swr";
import ActivityCard from "./ActivityCard";

export default function ActivityList() {
  const { data, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error to load the Page.</p>;

  return (
    <div>
      <h3>Activities:</h3>
      <ul>
        {data.map((activity) => (
          <ActivityCard
            key={activity._id}
            title={activity.title}
            area={activity.area}
            country={activity.country}
            description={activity.description}
          />
        ))}
      </ul>
    </div>
  );
}
