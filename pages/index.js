import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";
import useSWR from "swr";
import { useState } from "react";



export default function HomePage() {
  const { data: activities, isLoading, error } = useSWR("/api/activities");
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error to load the Page.</p>;

  const filterActivities = activities.filter((activity) => {
    const match = search.toLowerCase();

    const title = activity.title?.toLowerCase() || "";
    const category = activity.category?.toLowerCase() || "";
    const country = activity.country?.toLowerCase() || "";

    return (
      title.includes(match) ||
      category.includes(match) ||
      country.includes(match)
    );
  });

  function handleSearch(event) {
    const inputElement = event.target;
    const newValue = inputElement.value;

    setSearch(newValue);
  }

  return (
    <>
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <input placeholder="Filter: Title, Category, Country" value={search} onChange={handleSearch} />
      <ActivityList activities={filterActivities} />
      <ActivityCard />
    </>
  );
}
