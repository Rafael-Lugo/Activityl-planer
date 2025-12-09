import { useState } from "react";
import {
  DeleteButtonWrapper,
  DeletePrimaryButton,
  ConfirmBox,
  ConfirmActions,
  ConfirmButton,
} from "./StyledDeleteButton";

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
      <DeleteButtonWrapper>
        <DeletePrimaryButton  type="button" onClick={handleFirstClick}>
          Delete
        </DeletePrimaryButton>
      </DeleteButtonWrapper>
    );
  }

 
  return (
    <>
    <DeleteButtonWrapper>
    <ConfirmBox>
        <p>Really Delete?</p>
    <ConfirmActions>
      <ConfirmButton type="button" $variante="Cancel" onClick={handleCancel}>
        Cancel
      </ConfirmButton>
      <ConfirmButton type="button" onClick={handleConfirmDelete}>
        Delete
      </ConfirmButton>
      </ConfirmActions>
      </ConfirmBox>
      </DeleteButtonWrapper>
    </>
  );
}
 