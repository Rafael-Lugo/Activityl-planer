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
  FieldWrapper,
  EditPanel,
  EditPanelLabel,
  CancelButton,
  InlineTextarea,
} from "./StyledActivityDetails";

import { Form } from "lucide-react";

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
      setToggleEdit(false)
    }
  }

  return (
    <>
      <DetailsPageWrapper>
        <DetailsPageHeader>
          <BackButton />

          <EditableItem
            label="Title"
            form={
              <InlineForm onSubmit={handleEdit}>
                <InlineInput
                  name="title"
                  defaultValue={activity.title}
                  required
                />
                <InlineSaveButton type="submit">Save</InlineSaveButton>
              </InlineForm>
            }
            display={<DetailsTitle>{activity.title}</DetailsTitle>}
          />
        </DetailsPageHeader>

        <DetailsImage
          src={activity.imageUrl}
          alt={activity.title}
          height={300}
          width={300}
        />

        <EditableItem
          label="Description"
          form={
            <InlineForm onSubmit={handleEdit}>
              <EditPanelLabel>Description:</EditPanelLabel>
              <InlineTextarea
                name="description"
                defaultValue={activity.description}
                rows={5}
              />

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
          label="area"
          form={
            <InlineForm onSubmit={handleEdit}>
              <EditPanelLabel>Area:</EditPanelLabel>
              <InlineTextarea name="area" defaultValue={activity.area} />

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
          label="Country"
          form={
            <InlineForm onSubmit={handleEdit}>
              <EditPanelLabel>Country:</EditPanelLabel>
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
          label="Category"
          form={
            <InlineForm onSubmit={handleEdit}>
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
            </InlineForm>
          }
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
        />
        <DeleteButton id={activity._id} onDelete={onDelete} />
      </DetailsPageWrapper>
    </>
  );
}

function EditableItem({ form, display }) {
  const [toggleEdit, setToggleEdit] = useState(false);

  if (toggleEdit) {
    return (
      <FieldWrapper>
        <EditPanel>{form}</EditPanel>

        <CancelButton type="button" onClick={() => setToggleEdit(false)}>
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
