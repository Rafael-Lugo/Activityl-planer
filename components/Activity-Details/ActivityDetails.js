import BackButton from "./BackButton/BackButton";
import countries from "world-countries";
import useSWR from "swr";
import { useState } from "react";
import DeleteButton from "./DeleteButton/DeleteButton";
import ImageUpload from "../UploadImage/ImageUpload";
import ImageLoadingPlaceholder from "./ImageLoadingPlaceholder";

import {
  DetailsPageWrapper,
  DetailsPageHeader,
  DetailsTitle,
  DetailsSection,
  DetailsLabel,
  DetailsText,
  InlineForm,
  InlineInput,
  InlineSelect,
  InlineSaveButton,
  EditContainer,
  EditToggleButton,
  FieldWrapper,
  EditPanel,
  EditPanelLabel,
  CancelButton,
  InlineTextarea,
} from "./StyledActivityDetails";



export default function ActivityDetails({ activity, onDelete }) {
  const { data: categories } = useSWR("/api/categories");
  const { mutate } = useSWR(`/api/activities/${activity._id}`);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const countryList = countries.map((country) => country.name.common);

  async function handleEdit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const activityData = Object.fromEntries(formData);

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

      mutate();
    } catch (error) {
      console.error("Text edit failed:", error);
    }
  }

  async function handleImageEdit(event) {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    setIsEditingImage(true);
    setUploadProgress("Uploading new image...");

    try {
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
      const imageUrl = {
        url: uploadResult.secure_url || uploadResult.url,
        width: uploadResult.width.toString(),
        height: uploadResult.height.toString(),
        public_id: uploadResult.public_id,
      };

      setUploadProgress("Updating activity...");

      const response = await fetch(`/api/activities/${activity._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to update activity");
      }

      setIsEditingImage(false);
      setUploadProgress(null);
      setSelectedFile(null);
      mutate();
    } catch (error) {
      console.error("Image edit failed:", error);
      setIsEditingImage(false);
      setUploadProgress(null);
    }
  }

  return (
    <>
      <DetailsPageWrapper>
        <DetailsPageHeader>
          <BackButton />

          <EditableItem
            onSubmit={handleEdit}
            display={<DetailsTitle>{activity.title}</DetailsTitle>}
          >
            <InlineInput name="title" defaultValue={activity.title} required />
            <InlineSaveButton type="submit">Save</InlineSaveButton>
          </EditableItem>
        </DetailsPageHeader>

        <EditableItem
          onSubmit={handleImageEdit}
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
        >
          {isEditingImage ? (
            <ImageLoadingPlaceholder message={uploadProgress} />
          ) : (
            <>
              <EditPanelLabel>Picture:</EditPanelLabel>
              <ImageUpload onFileSelect={(file) => setSelectedFile(file)} />
              <InlineSaveButton type="submit">Save</InlineSaveButton>
            </>
          )}
        </EditableItem>

        <EditableItem
          onSubmit={handleEdit}
          display={
            <DetailsSection>
              <DetailsLabel>Description: </DetailsLabel>
              <DetailsText>{activity.description}</DetailsText>
            </DetailsSection>
          }
        >
          <EditPanelLabel>Description:</EditPanelLabel>
          <InlineTextarea
            name="description"
            defaultValue={activity.description}
            rows={5}
          />
          <InlineSaveButton type="submit">Save</InlineSaveButton>
        </EditableItem>

        <EditableItem
          onSubmit={handleEdit}
          display={
            <DetailsSection>
              <DetailsLabel>Area: </DetailsLabel>
              <DetailsText>{activity.area}</DetailsText>
            </DetailsSection>
          }
        >
          <EditPanelLabel>Area:</EditPanelLabel>
          <InlineTextarea name="area" defaultValue={activity.area} />
          <InlineSaveButton type="submit">Save</InlineSaveButton>
        </EditableItem>

        <EditableItem
          onSubmit={handleEdit}
          display={
            <DetailsSection>
              <DetailsLabel>Country:</DetailsLabel>
              <DetailsText>{activity.country}</DetailsText>
            </DetailsSection>
          }
        >
          <EditPanelLabel>Country:</EditPanelLabel>
          <InlineSelect name="country" defaultValue={activity.country}>
            {countryList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </InlineSelect>
          <InlineSaveButton type="submit">Save</InlineSaveButton>
        </EditableItem>

        <EditableItem
          onSubmit={handleEdit}
          display={
            <DetailsSection>
              <DetailsLabel>Category:</DetailsLabel>
              {activity.categories?.length > 0 ? (
                activity.categories.map((category) => (
                  <DetailsText key={category._id}> {category.name}</DetailsText>
                ))
              ) : (
                <DetailsText> No category selected</DetailsText>
              )}
            </DetailsSection>
          }
        >
          <EditPanelLabel>Category:</EditPanelLabel>
          <InlineSelect
            name="categories"
            defaultValue={activity.categories?.[0]?._id || ""}
          >
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </InlineSelect>
          <InlineSaveButton type="submit">Save</InlineSaveButton>
        </EditableItem>
        <DeleteButton id={activity._id} onDelete={onDelete} />
      </DetailsPageWrapper>
    </>
  );
}

function EditableItem({ children, display, onSubmit }) {
  const [toggleEdit, setToggleEdit] = useState(false);

  const closeEdit = () => setToggleEdit(false);

  const handleSubmit = async (event) => {
    if (onSubmit) {
      await onSubmit(event);
      closeEdit();
    }
  };

  if (toggleEdit) {
    return (
      <FieldWrapper>
        <EditPanel>
          <InlineForm onSubmit={handleSubmit}>{children}</InlineForm>
        </EditPanel>

        <CancelButton type="button" onClick={closeEdit}>
          Cancel
        </CancelButton>
      </FieldWrapper>
    );
  }

  return (
    <EditContainer>
      {display}

      <EditToggleButton type="button" onClick={() => setToggleEdit(true)}>
        Edit
      </EditToggleButton>
    </EditContainer>
  );
}
