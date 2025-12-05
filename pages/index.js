import ActivityCard from "@/components/Activitylist/ActivityCard";
import ActivityList from "@/components/Activitylist/ActivityList";
import { PageWrapper, Subtitle, Title } from "@/components/Style-General";



export default function HomePage() {
  return (
    <PageWrapper>
      <Title>Activity Planner</Title>
      <Subtitle>for your next journey</Subtitle>
      <ActivityList />
      <ActivityCard />
    </PageWrapper>
  );
}
