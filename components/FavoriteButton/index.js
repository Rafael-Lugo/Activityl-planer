import { Bookmark } from "lucide-react";
import Image from "next/image";

export default function FavoriteButton({ _id, toggleLiked, isLiked }) {
   
  return (
    <button
      type="button"
      onClick={() => toggleLiked(_id)} //arrow function on _id
      aria-label={isLiked ? "unlike" : "like"}
    >
      <Bookmark fill={isLiked ? "red" : "none"} />
    </button>
  );
}
