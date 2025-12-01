import { useState } from "react";

export default function FavoriteButton({
  isFavorite,
  onClick,
  toogleFavorite,
}) {
  const [liked, setLiked] = useState(false);

  function toogleFavorite() {
    setLiked(!liked);
  }

  return (
    <>
      <Button type="button" onClick={toogleFavorite}>
        {liked ? "remove like" : "Add like"}
      </Button>
    </>
  );
}
