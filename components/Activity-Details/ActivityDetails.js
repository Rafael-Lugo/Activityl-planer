import Navigation from "../Navigation/Navigation";
import BackButton from "./BackButton/BackButton";


export default function ActivityDetails({ activity }) {
  
  return (
    <>
    <header>
      <h1>{activity.title}</h1>
      </header>
      <main>
        <BackButton />
      <img
        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&crop=center"
        alt={activity.title}
        height={300}
        width={300}
      />
      <p>{activity.description}</p>
      <p>Area: {activity.area}</p>
      <p>Country: {activity.country}</p>
      {activity.categories && activity.categories.length > 0 && (
        <section>
          <strong>Categories:</strong>
          {activity.categories.map((category) => (
            <span key={category._id}> {category.name}</span>
          ))}
        </section>
      )}
      </main>
    </>
  );
}
