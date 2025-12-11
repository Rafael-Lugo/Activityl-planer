import BackButton from "./BackButton/BackButton";
import countries from "world-countries";
import useSWR from "swr";
import { useState } from "react";
import DeleteButton from "./DeleteButton/DeleteButton";
import ImageUpload from "../UploadImage/ImageUpload";
import ImageLoadingPlaceholder from "./ImageLoadingPlaceholder";

export default function ActivityDetails({ activity, onDelete }) {
  const { data: categories } = useSWR("/api/categories");
  const { mutate } = useSWR(`/api/activities/${activity._id}`);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const countryList = countries.map((country) => country.name.common);

  async function handleEdit(event) {
    event.preventDefault();

    if (selectedFile) {
      setIsEditingImage(true);
      setUploadProgress("Uploading new image...");
    }

    try {
      const formData = new FormData(event.target);
      const activityData = Object.fromEntries(formData);

      let imageUrl = null;

      if (selectedFile) {
        const uploadForm = new FormData();
        uploadForm.append("cover", selectedFile);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: uploadForm,
        });

        if (!uploadResponse.ok) {
          throw new Error("Image upload failed");
        }

        const uploadResult = await uploadResponse.json();
        imageUrl = {
          url: uploadResult.secure_url || uploadResult.url,
          width: uploadResult.width.toString(),
          height: uploadResult.height.toString(),
          public_id: uploadResult.public_id,
        };

        setUploadProgress("Image updated successfully!");
      }

      setUploadProgress("Updating activity...");

      activityData.imageUrl = imageUrl;

      const response = await fetch(`/api/activities/${activity._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activityData),
      });

      if (!response.ok) {
        throw new Error("Failed to update activity");
      }

      // Success - clear states
      setIsEditingImage(false);
      setUploadProgress(null);
      setSelectedFile(null);
      mutate();
    } catch (error) {
      console.error("Edit failed:", error);
      setIsEditingImage(false);
      setUploadProgress(null);
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
        <EditableItem
          form={
            <form onSubmit={handleEdit}>
              <label>
                <strong>Image: </strong>
                <ImageUpload onFileSelect={(file) => setSelectedFile(file)} />
              </label>
              <button type="submit">Save</button>
            </form>
          }
          display={
            isEditingImage ? (
              <ImageLoadingPlaceholder message={uploadProgress} />
            ) : (
              <img
                src={activity.imageUrl?.url || activity.imageUrl}
                alt={activity.title}
                height={300}
              />
            )
          }
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
        <DeleteButton id={activity._id} onDelete={onDelete} />
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
