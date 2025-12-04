import { useState } from "react";
import BackButton from "./BackButton/BackButton";
import EditButton from "../EditButton/EditButton";
import countries from "world-countries";
import useSWR from "swr";

export default function ActivityDetails({ activity }) {
  const { data: categories } = useSWR("/api/categories");
  const { mutate } = useSWR(`/api/activities/${activity._id}`);

  const [showEditTitle, setShowEditTitle] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);
  const [showEditArea, setShowEditArea] = useState(false);
  const [showEditCountry, setShowEditCountry] = useState(false);
  const [showEditCategories, setShowEditCategories] = useState(false);

  const countryList = countries.map((country) => country.name.common);

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
      setShowEditTitle(false);
      setShowEditDescription(false);
      setShowEditArea(false);
      setShowEditCountry(false);
      setShowEditCategories(false);
      mutate();
    }
  }

  return (
    <>
      <header>
        <h1>{activity.title}</h1>
        <EditButton onClick={() => setShowEditTitle(!showEditTitle)} />
        {showEditTitle && (
          <form onSubmit={handleEdit}>
            <input name="title" defaultValue={activity.title} />
            <button type="submit">Save</button>
          </form>
        )}
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

        <EditButton
          onClick={() => setShowEditDescription(!showEditDescription)}
        />
        {showEditDescription && (
          <form onSubmit={handleEdit}>
            <input name="description" defaultValue={activity.description} />
            <button type="submit">Save</button>
          </form>
        )}

        <p>Area: {activity.area}</p>
        <EditButton onClick={() => setShowEditArea(!showEditArea)} />
        {showEditArea && (
          <form onSubmit={handleEdit}>
            <input name="area" defaultValue={activity.area} />
            <button type="submit">Save</button>
          </form>
        )}
        <p>Country: {activity.country}</p>
        <EditButton onClick={() => setShowEditCountry(!showEditCountry)} />
        {showEditCountry && (
          <form onSubmit={handleEdit}>
            <select name="country" defaultValue={activity.country}>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <button type="submit">Save</button>
          </form>
        )}
        {activity.categories && activity.categories.length > 0 && (
          <section>
            <strong>Categories:</strong>
            {activity.categories.map((category) => (
              <span key={category._id}> {category.name}</span>
            ))}
          </section>
        )}
        <EditButton
          onClick={() => setShowEditCategories(!showEditCategories)}
        />
        {showEditCategories && (
          <form onSubmit={handleEdit}>
            <select name="categories" defaultValue={activity.categories[0]._id}>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button type="submit">Save</button>
          </form>
        )}
      </main>
    </>
  );
}
