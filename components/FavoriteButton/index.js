import BookmarkIcon from "../icons/bookmark.svg";
import { IconButton } from "../Style-General";

export default function FavoriteButton({ _id, toggleLiked, isLiked }) {
  return (
    <IconButton
      type="button"
      onClick={() => toggleLiked(_id)} //arrow function on _id
      aria-label={isLiked ? "unlike" : "like"}
      isLiked={isLiked}
    >
      <BookmarkIcon
        width={28}
        height={28}
        stroke="var(--accent)"
        fill={isLiked ? "var(--accent)" : "none"}
      />
    </IconButton>
  );
}
