import ActivityList from "@/components/ActivityList";
import useSWR from "swr";

export default function FavoriteListPage({ liked, toogleFavorite }) {
  const { data: activities } = useSWR("/api/activities");

  if (!activities) return <p>No activities found</p>;

  // Filter für nur favorite activities
  const favoriteActivities = activities.filter((activity) =>
    liked.includes(activity._id)
  );

  return (
    <>
      <h1>Favorite Activities</h1>
      {favoriteActivities.length === 0 ? (
        <p>You have no favorite activities yet.</p>
      ) : (
        <ActivityList
          activities={favoriteActivities}
          liked={liked}
          toogleFavorite={toogleFavorite}
        />
      )}
    </>
  );
}
