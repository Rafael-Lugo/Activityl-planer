import { Bookmark } from "lucide-react";
import Image from "next/image";

export default function FavoriteButton({ liked, _id, toogleFavorite }) {
  return (
    <button
      type="button"
      onClick={() => toogleFavorite(_id)} //arrow function on _id
      aria-label={liked ? "unlike" : "like"}
    >
      <Bookmark fill={liked ? "red" : "none"}/>
    </button>
  );
}

/* Function Componet für ActivityList:
<FavoriteButton liked={isLiked} _id={activity._id} toogleFavorite={toogleFavorite} /> */

/* Function Component für PAge-index.js:
in <ActivityList liked={liked} toogleFavorite={toogleFavorite} />
*/
