import ActivityList from "@/components/Activitylist/ActivityList";
import { CardList } from "@/components/Style-General";
import useSWR from "swr";

export default function HomePage({ likedActivityIds, toggleLiked }) {
  const { data: activities, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!activities) return <p>No activities found.</p>;

  return (
    <>
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <CardList>
        <ActivityList activities={activities} likedActivityIds={likedActivityIds} toggleLiked={toggleLiked} />
      </CardList>
    </>
  );
}
