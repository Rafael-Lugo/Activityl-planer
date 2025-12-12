import ActivityCard from "./ActivityCard";
import { CardList, ActivityItem } from "../Style-General";

export default function ActivityList({
  activities,
  likedActivityIds,
  toggleLiked,
}) {
  return (
    <CardList>
      {activities.map((activity) => (
        <ActivityItem key={activity._id}>
          <ActivityCard
            _id={activity._id}
            title={activity.title}
            description={activity.description}
            area={activity.area}
            country={activity.country}
            imageUrl={activity.imageUrl}
            likedActivityIds={likedActivityIds}
            toggleLiked={toggleLiked}
          />
        </ActivityItem>
      ))}
    </CardList>
  );
}
