import { useState } from "react";
import useSWR from "swr";
import countries from "world-countries";


export default function ActivityForm() {
  const { mutate } = useSWR("/api/activities");
  const { data: categories } = useSWR("/api/categories");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    //reset error and success messages
    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);
    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activityData),
    });

    if (!response.ok) {
      setSubmitError("Failed to create activity.");
      return;
    }

    //activity to go on top and successmessage
    setSuccessMessage("Activity has been created!");
    mutate();
    event.target.reset();
  }

  // world countries library
  const countryList = countries.map((country) => country.name.common);

  return (
    <>
      <h1>Create your Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:*
          <input type="text" id="title" name="title" required />
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="category">
          Please select a category*
          <select id="category" name="category" required>
            <option value="Select Category">Please select a category</option>
            {categories?.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="area">
          Area:
          <input type="text" id="area" name="area" />
        </label>
        <label htmlFor="country">
          Country:
          <select id="country" name="country">
            {countryList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
        {submitError && <p>{submitError}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </>
  );
}
