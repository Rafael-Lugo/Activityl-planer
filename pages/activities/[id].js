import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import ActivityDetails from "@/components/Activity-Details/ActivityDetails";

export default function DetailsPage({}) {
  const router = useRouter();
  const { id } = router.query;

  

  const { data: activity, isLoading } = useSWR(`/api/activities/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!activity) {
    return;
  }

  return (
    <>
  <ActivityDetails activity={activity}/>
     
   
    </>

  );
}