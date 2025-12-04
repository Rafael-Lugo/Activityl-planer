import useSWR from "swr";
import ActivityCard from "./ActivityCard";
import Navigation from "../Navigation/Navigation";

export default function ActivityList() {
  const { data, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error to load the Page.</p>;

  return (
    <>
      <h3>Activities:</h3>
      <ul>
        {data.map((activity) => (
          <ActivityCard key={activity._id} {...activity} />
        ))}
      </ul>
       <footer>
        <Navigation/>
      </footer>
    </>
  );
}
