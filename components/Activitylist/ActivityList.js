import ActivityCard from "./ActivityCard";
import Navigation from "../Navigation/Navigation";

export default function ActivityList({ activities }) {
  if (!activities) return <p>No activities found.</p>;

  return (
    <>
      <h3>Activities:</h3>
      <ul>
        {activities.map((activity) => (
          <ActivityCard key={activity._id} {...activity} />
        ))}
      </ul>
    </>
  );
}
