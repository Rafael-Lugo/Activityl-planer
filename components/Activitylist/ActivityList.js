import ActivityCard from "./ActivityCard";

export default function ActivityList({
  activities,
  likedActivityIds,
  toggleLiked,
}) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity._id}>
          <ActivityCard
            _id={activity._id}
            title={activity.title}
            imageUrl={activity.imageUrl}
            description={activity.description}
            area={activity.area}
            country={activity.country}
            likedActivityIds={likedActivityIds}
            toggleLiked={toggleLiked}
          />
        </li>
      ))}
    </ul>
  );
}
