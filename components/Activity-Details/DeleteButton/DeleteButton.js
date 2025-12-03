import { useState } from "react";

 export default function DeleteButton({ onDelete, id }) {
   const [deleteButton, setDeleteButton] = useState(false);

  function handleFirstClick() {         
    setDeleteButton(true);
  }

  function handleCancel() {
    setDeleteButton(false); 
  }

  function handleConfirmDelete() {
    onDelete(id);   
  }

  if (!deleteButton) {
    return (
      <button onClick={handleFirstClick}>
        Delete
      </button>
    );
  }

 
  return (
    <>
    <div className="">
        <p>Really Delete?</p>
    <div className="">
      <button onClick={handleCancel}>
        Cancel
      </button>
      <button onClick={handleConfirmDelete}>
        Delete
      </button>
      </div>
      </div>
    </>
  );
}
 