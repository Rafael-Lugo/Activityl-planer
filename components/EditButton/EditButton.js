export default function EditButton({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
