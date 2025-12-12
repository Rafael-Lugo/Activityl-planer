import { useState, useRef } from "react";
import useSWR from "swr";
import countries from "world-countries";
import ImageUpload from "../UploadImage/ImageUpload";

import {
  Container,
  Subtitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledFormButton,
  StyledTextarea,
} from "../Style-General";

export default function ActivityForm() {
  const { mutate } = useSWR("/api/activities");
  const { data: categories } = useSWR("/api/categories");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();

    //reset error and success messages
    setSubmitError("");
    setSuccessMessage("");

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
        setSubmitError("Image upload failed");
        return;
      }

      const uploadResult = await uploadResponse.json();

      imageUrl = {
        url: uploadResult.secure_url || uploadResult.url,
        width: uploadResult.width.toString(),
        height: uploadResult.height.toString(),
        public_id: uploadResult.public_id,
      };
    }

    activityData.imageUrl = imageUrl;

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
    setSelectedFile(null);
    setFormKey((prev) => prev + 1);
  }

  // world countries library
  const countryList = countries.map((country) => country.name.common);

  return (
    <Container>
      <Subtitle>Create your Activity</Subtitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">
          Title
          <StyledInput type="text" id="title" name="title" required />
        </StyledLabel>
   <StyledLabel htmlFor="picture">Picture
        <ImageUpload
          key={formKey}
          onFileSelect={(file) => setSelectedFile(file)}
        /></StyledLabel>
        <StyledLabel htmlFor="description">
          Description
          <StyledTextarea
            type="text"
            id="description"
            name="description"
            rows={4}
            placeholder="Describe your activity"
          />
        </StyledLabel>

        <StyledLabel htmlFor="category">
          Please select a category
          <StyledSelect id="category" name="category" required>
            <option value="Select Category">Please select a category</option>
            {categories?.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel htmlFor="area">
          Area
          <StyledInput type="text" id="area" name="area" />
        </StyledLabel>

        <StyledLabel htmlFor="country">
          Country
          <StyledSelect id="country" name="country">
            {countryList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>

        <StyledFormButton type="submit">Submit</StyledFormButton>
        {submitError && <p>{submitError}</p>}
        {successMessage && <p>{successMessage}</p>}
      </StyledForm>
    </Container>
  );
}
