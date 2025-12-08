import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";
import useSWR from "swr";
import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";



export default function HomePage() {
  const { data: activities, isLoading, error } = useSWR("/api/activities");
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error to load the Page.</p>;

  const filterActivities = activities
    ? activities.filter((activity) => {
        const match = search.toLowerCase();

        const title = activity.title?.toLowerCase() || "";
        const category = activity.category?.toLowerCase() || "";
        const country = activity.country?.toLowerCase() || "";

        return `${title}|${category}|${country}`.includes(match);
      })
    : [];

  console.log("Activities:", activities);
  console.log("FilterActivities:", filterActivities);
  console.log("Search:", search);

  return (
    <>
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <Searchbar search={search} setSearch={setSearch} />

      <ActivityList activities={filterActivities} />
    </>
  );
}
