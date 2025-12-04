import ActivityCard from "../Activitylist/ActivityCard";
import useSWR from "swr";

export default function FavoriteListPage({ liked, toggleLiked }) {
  const { data: activities, isLoading, error } = useSWR("/api/activities");

  if (!activities) return <p>No activities found</p>;
  if (isLoading) return <p>Loading activities...</p>;
  if (error) return <p>Error loading activities</p>;

  // Filter für nur favorite activities
  const favoriteActivities = activities.filter((activity) =>
    liked.includes(activity._id)
  );

  if (favoriteActivities.length === 0){
    return <p>No activities yet.</p>;
  }

  return (
    <ul>
      {favoriteActivities.map((activity) => (
        <li key={activity._id}>
          <ActivityCard
            title={activity.title}
            description={activity.description}
            area={activity.area}
            country={activity.country}
            toggleLiked={toggleLiked}
            liked={liked}
          />
        </li>
      ))}
    </ul>
  );
}
