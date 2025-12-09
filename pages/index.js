import ActivityList from "@/components/Activitylist/ActivityList";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import { useSession } from "next-auth/react";
import { StyledSuccessMessageDiv } from "@/components/Login/StyledMessages";

export default function HomePage({ likedActivityIds, toggleLiked }) {
  const { data: activities, isLoading, error } = useSWR("/api/activities");
  const [search, setSearch] = useState("");

  // pop up message upon successful login
  const { data: session } = useSession();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (session) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [session]);

  if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!activities) return <p>No activities found.</p>;

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
      {showSuccessMessage && (
        <StyledSuccessMessageDiv>
          Hello, {session?.user.name}!
        </StyledSuccessMessageDiv>
      )}
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <Searchbar search={search} setSearch={setSearch} />
      <ActivityList
        activities={(activities, filterActivities)}
        likedActivityIds={likedActivityIds}
        toggleLiked={toggleLiked}
      />
    </>
  );
}
