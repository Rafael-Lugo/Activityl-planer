import { useState } from "react";
import {
  FileInputWrapper,
  StyledFileInput,
  FileInputButton,
  UploadIcon,
  PreviewImage,
  FileName,
} from "./StyledImageUpload";

export default function ImageUpload({ onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
    setFileName(file.name);

    if (onFileSelect) {
      onFileSelect(file);
    }
  }

  return (
    <div>
      <FileInputWrapper>
        <StyledFileInput
          type="file"
          name="cover"
          accept="image/*"
          required
          onChange={handleFileChange}
          id="file-upload"
        />
        <FileInputButton htmlFor="file-upload">
          <UploadIcon>📷</UploadIcon>
          {fileName ? "Bild ändern" : "Bild auswählen"}
        </FileInputButton>
      </FileInputWrapper>
      
      {fileName && <FileName>{fileName}</FileName>}
      
      {preview && (
        <PreviewImage
          src={preview}
          alt="Preview"
        />
      )}
    </div>
  );
}