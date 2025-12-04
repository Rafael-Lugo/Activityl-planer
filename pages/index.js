import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";

export default function HomePage() {
  return (
    <>
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <ActivityList />
      <ActivityCard />
    </>
  );
}
