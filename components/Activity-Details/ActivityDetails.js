import { useState } from "react";
import BackButton from "./BackButton/BackButton";

export default function ActivityDetails({ activity }) {
  const [editForm, setEditForm] = useState(false);
  const [updatedValue, setUpdatedValue] = useState("");
  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);
    const response = await fetch(`/api/activities/${activity._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activityData),
    });
    if (response.ok) {
      setEditForm(false);
    }
  }

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
