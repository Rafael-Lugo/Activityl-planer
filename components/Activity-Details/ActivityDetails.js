import BackButton from "./BackButton/BackButton";
import DeleteButton from "./DeleteButton/DeleteButton";


export default function ActivityDetails({ activity, onDelete }) {
  
  return (
    <>
    <header>
      <h1>{activity.title}</h1>
         <BackButton />
      </header>
      <main>
        <DeleteButton id={activity._id} onDelete={onDelete}/>
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
