import { Bookmark } from "lucide-react";
import Image from "next/image";

export default function FavoriteButton({ _id, toggleFavorite, liked }) {
  const likedActivity = liked.includes(_id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(_id)} //arrow function on _id
      aria-label={likedActivity ? "unlike" : "like"}
    >
      <Bookmark fill={likedActivity ? "red" : "none"} />
    </button>
  );
}

/* Function Componet für ActivityList/Card:
<FavoriteButton liked={isLiked} _id={activity._id} toogleFavorite={toogleFavorite} /> */

/* Function Component für PAge-index.js:
in <ActivityList liked={liked} toogleFavorite={toogleFavorite} />
*/
