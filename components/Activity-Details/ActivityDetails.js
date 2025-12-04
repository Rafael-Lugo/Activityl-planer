import { useState } from "react";
import BackButton from "./BackButton/BackButton";
import countries from "world-countries";
import useSWR from "swr";

export default function ActivityDetails({ activity }) {
  const { data: categories } = useSWR("/api/categories");
  const { mutate } = useSWR(`/api/activities/${activity._id}`);

  const countryList = countries.map((country) => country.name.common);
  function EditableItem({ form, display }) {
    const [toggleEdit, setToggleEdit] = useState(false);
    return (
      <div>
        {toggleEdit ? (
          <div
            onSubmit={() => {
              setToggleEdit(false);
            }}
          >
            {form}
          </div>
        ) : (
          display
        )}

        <button onClick={() => setToggleEdit(!toggleEdit)}>
          {toggleEdit ? "Cancel" : "Edit"}
        </button>
      </div>
    );
  }

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
      mutate();
    }
  }

  return (
    <>
      <header>
        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <input name="title" defaultValue={activity.title} />
              <button type="submit">Save</button>
            </form>
          }
          display={<h1>{activity.title}</h1>}
        />
      </header>
      <main>
        <BackButton />
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&crop=center"
          alt={activity.title}
          height={300}
          width={300}
        />
        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <input name="description" defaultValue={activity.description} />
              <button type="submit">Save</button>
            </form>
          }
          display={<p>{activity.description}</p>}
        />

        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <input name="area" defaultValue={activity.area} />
              <button type="submit">Save</button>
            </form>
          }
          display={<p>Area: {activity.area}</p>}
        />

        <EditableItem
          form={
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
          }
          display={<p>Country: {activity.country}</p>}
        />

        <EditableItem
          display={
            <section>
              <strong>Categories:</strong>
              {activity.categories.map((category) => (
                <span key={category._id}> {category.name}</span>
              ))}
            </section>
          }
          form={
            <form onSubmit={handleEdit}>
              <select
                name="categories"
                defaultValue={activity.categories[0]._id}
              >
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button type="submit">Save</button>
            </form>
          }
        />
      </main>
    </>
  );
}
