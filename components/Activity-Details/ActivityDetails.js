import BackButton from "./BackButton/BackButton";
import countries from "world-countries";
import useSWR from "swr";
import { useState } from "react";
import DeleteButton from "./DeleteButton/DeleteButton";

import {
  DetailsPageWrapper,
  DetailsPageHeader,
  DetailsTitle,
  DetailsImage,
  DetailsSection,
  DetailsLabel,
  DetailsText,
  InlineForm,
  InlineInput,
  InlineSelect,
  InlineSaveButton,
  EditContainer,
  EditToggleButton,
} from "./StyledActivityDetails";

export default function ActivityDetails({ activity, onDelete }) {
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
      <DetailsPageWrapper>
        <BackButton />
        <EditableItem
          form={
            <InlineForm onSubmit={handleEdit}>
              <label>
                <strong>Title: </strong>
                <InlineInput name="title" defaultValue={activity.title} />
              </label>
              <InlineSaveButton type="submit">Save</InlineSaveButton>
            </InlineForm>
          }
          display={<DetailsTitle>{activity.title}</DetailsTitle>}
        />

        <DetailsImage
          src={activity.imageUrl}
          alt={activity.title}
          height={300}
          width={300}
        />

        <EditableItem
          form={
            <InlineForm onSubmit={handleEdit}>
              <label>
                <strong>Description: </strong>
                <InlineInput
                  name="description"
                  defaultValue={activity.description}
                />
              </label>
              <InlineSaveButton type="submit">Save</InlineSaveButton>
            </InlineForm>
          }
          display={
            <DetailsSection>
              <DetailsLabel>Description: </DetailsLabel>
              <DetailsText>{activity.description}</DetailsText>
            </DetailsSection>
          }
        />

        <EditableItem
          form={
            <InlineForm onSubmit={handleEdit}>
              <label>
                <strong>Area:</strong>
                <InlineInput name="area" defaultValue={activity.area} />
              </label>
              <InlineSaveButton type="submit">Save</InlineSaveButton>
            </InlineForm>
          }
          display={
            <DetailsSection>
              <DetailsLabel>Area: </DetailsLabel>
              <DetailsText>{activity.area}</DetailsText>
            </DetailsSection>
          }
        />

        <EditableItem
          form={
            <InlineForm onSubmit={handleEdit}>
              <strong>Country: </strong>
              <InlineSelect name="country" defaultValue={activity.country}>
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </InlineSelect>
              <InlineSaveButton type="submit">Save</InlineSaveButton>
            </InlineForm>
          }
          display={
            <DetailsSection>
              <DetailsLabel>Country:</DetailsLabel>
              <DetailsText>{activity.country}</DetailsText>
            </DetailsSection>
          }
        />

        <EditableItem
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
          form={
            <InlineForm onSubmit={handleEdit}>
              <strong>Category: </strong>
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
            </InlineForm>
          }
        />
        <DeleteButton id={activity._id} onDelete={onDelete} />
      </DetailsPageWrapper>
    </>
  );
}

function EditableItem({ form, display }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <EditContainer>
      {toggleEdit ? (
        <EditToggleButton
          onSubmit={() => {
            setToggleEdit(false);
          }}
        >
          {form}
        </EditToggleButton>
      ) : (
        display
      )}

      <EditToggleButton onClick={() => setToggleEdit(!toggleEdit)}>
        {toggleEdit ? "Cancel" : "Edit"}
      </EditToggleButton>
    </EditContainer>
  );
}
