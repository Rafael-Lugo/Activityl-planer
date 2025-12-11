import styled, { keyframes } from "styled-components";

// Spinner Animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Loading Container
const LoadingContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  color: #6c757d;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

// Spinner Circle
const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #e9ecef;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 12px;
`;

// Loading Text
const LoadingText = styled.div`
  font-weight: 500;
  line-height: 1.4;
`;

// Progress Indicator (optional dots)
const ProgressDots = styled.div`
  margin-top: 8px;

  &::after {
    content: "";
    animation: ${keyframes`
      0%, 20% { content: ""; }
      40% { content: "."; }
      60% { content: ".."; }
      80%, 100% { content: "..."; }
    `} 1.5s infinite;
  }
`;

// Main Component
export default function ImageLoadingPlaceholder({
  message = "Updating image...",
}) {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>📤 {message}</LoadingText>
      <ProgressDots />
    </LoadingContainer>
  );
}

// Export individual components if needed
export { LoadingContainer, Spinner, LoadingText };
