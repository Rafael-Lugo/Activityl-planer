import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";

export default function HomePage({liked, toggleFavorite}) {
  return (
    <>
      <h1>Activity Planer</h1>
      <h2>for your next journey</h2>
      <ActivityList liked={liked} toggleFavorite={toggleFavorite} />
      <ActivityCard />
    </>
  );
}
