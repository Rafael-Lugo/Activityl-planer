import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";


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
