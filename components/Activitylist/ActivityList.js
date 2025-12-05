import useSWR from "swr";
import ActivityCard from "./ActivityCard";
import Navigation from "../Navigation/Navigation";
import { CardTitle, StyledActivityList } from "../Style-General";

export default function ActivityList() {
  const { data, isLoading, error } = useSWR("/api/activities");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error to load the Page.</p>;

  return (
    <>
      <CardTitle>Activities:</CardTitle>
      <StyledActivityList>
        {data.map((activity) => (
          <ActivityCard key={activity._id} {...activity} />
        ))}
      </StyledActivityList>
    </>
  );
}
