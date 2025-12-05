import BackButton from "./BackButton/BackButton";
import countries from "world-countries";
import useSWR from "swr";
import { useState } from "react";
import Image from "next/image";

export default function ActivityDetails({ activity }) {
  const { data: categories } = useSWR("/api/categories");
  const { mutate } = useSWR(`/api/activities/${activity._id}`);

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
      mutate();
    }
  }

  return (
    <>
      <header>
        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <label>
                <strong>Title: </strong>
                <input name="title" defaultValue={activity.title} />
              </label>
              <button type="submit">Save</button>
            </form>
          }
          display={<h1>{activity.title}</h1>}
        />
      </header>
      <main>
        <BackButton />
        <img
          src={activity.imageUrl}
          alt={activity.title}
          height={300}
          width={300}
        />
        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <label>
                <strong>Description: </strong>
                <input name="description" defaultValue={activity.description} />
              </label>
              <button type="submit">Save</button>
            </form>
          }
          display={
            <p>
              <strong>Description: </strong> {activity.description}
            </p>
          }
        />

        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <label>
                <strong>Area:</strong>
                <input name="area" defaultValue={activity.area} />
              </label>
              <button type="submit">Save</button>
            </form>
          }
          display={
            <p>
              <strong>Area: </strong>
              {activity.area}
            </p>
          }
        />

        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <strong>Country: </strong>
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
          display={
            <p>
              <strong>Country:</strong> {activity.country}
            </p>
          }
        />

        <EditableItem
          display={
            <section>
              <strong>Category:</strong>
              {activity.categories?.length > 0 ? (
                activity.categories.map((category) => (
                  <span key={category._id}> {category.name}</span>
                ))
              ) : (
                <span> No category selected</span>
              )}
            </section>
          }
          form={
            <form onSubmit={handleEdit}>
              <strong>Category: </strong>
              <select
                name="categories"
                defaultValue={activity.categories?.[0]?._id || ""}
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
