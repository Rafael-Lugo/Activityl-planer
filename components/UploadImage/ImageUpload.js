import styled from "styled-components";
import { useState } from "react";

export default function ImageUpload({ onFileSelect }) {
  const [preview, setPreview] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);

    if (onFileSelect) {
      onFileSelect(file);
    }
  }

  return (
    <>
      <input
        type="file"
        name="cover"
        accept="image/*"
        required
        onChange={handleFileChange}
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: "200px", marginTop: "10px" }}
        />
      )}
    </>
  );
}