import useSWR from "swr";
import { useRouter } from "next/router";
import ActivityDetails from "@/components/Activity-Details/ActivityDetails";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: activity, isLoading } = useSWR(`/api/activities/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!activity) {
    return (
      <div>
        <h1>Not Found</h1>
        <p>Activity not found.</p>
      </div>
    );
  }
  async function handleDelete() {
    const response = await fetch(`/api/activities/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    } else {
      return alert("Please try again");
    }
  }

  return (
    <>
      <ActivityDetails activity={activity} onDelete={handleDelete} />
    </>
  );
}
