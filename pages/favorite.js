import useSWR from "swr";
import ActivityList from "@/components/Activitylist/ActivityList";
import { Subtitle, Text } from "@/components/Style-General";

export default function FavoritesPage({ likedActivityIds, toggleLiked }) {
  const { data: activities, isLoading, error } = useSWR("/api/activities");

  if (!activities) return <p>No activities found</p>;
  if (isLoading) return <p>Loading activities...</p>;
  if (error) return <p>Error loading activities</p>;

  // Filter für nur favorite activities
  const favoriteActivities = activities.filter((activity) =>
    likedActivityIds.includes(activity._id)
  );  

  return (
    <>
      <Subtitle>Favorites Activities:</Subtitle>
      
       {favoriteActivities.length === 0 ? (
        <Text>No activities yet.</Text>
      ) : (
      <ActivityList
        activities={favoriteActivities}
        toggleLiked={toggleLiked}
        likedActivityIds={likedActivityIds}
      />
      )}
    </>
  );
}


