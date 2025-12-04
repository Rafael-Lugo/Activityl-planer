import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";
import { PageWrapper } from "@/components/Style-General";

export default function HomePage() {
  return (
    <PageWrapper>
      <h1>Activity Planner</h1>
      <h2>for your next journey</h2>
      <ActivityList />
      <ActivityCard />
    </PageWrapper>
  );
}
