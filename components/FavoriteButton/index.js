import { Bookmark } from "lucide-react";
import Image from "next/image";

export default function FavoriteButton({ _id, toggleLiked, liked }) {
  const likedActivity = liked?.includes(_id);

  return (
    <button
      type="button"
      onClick={() => toggleLiked(_id)} //arrow function on _id
      aria-label={likedActivity ? "unlike" : "like"}
    >
      <Bookmark fill={likedActivity ? "red" : "none"} />
    </button>
  );
}
