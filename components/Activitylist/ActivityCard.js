import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ActivityCard({
  _id,
  title,
  area,
  country,
  description,
  toggleLiked,
  likedActivityIds,
  imageUrl,
}) {
  const isLiked = likedActivityIds?.includes(_id);

  return (
    <li>
      <FavoriteButton _id={_id} toggleLiked={toggleLiked} isLiked={isLiked} />
      <Link href={`/activities/${_id}`}>
        <img src={imageUrl?.url || imageUrl} height={300} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <p>{area}</p>
      <p>{country}</p>
    </li>
  );
}
