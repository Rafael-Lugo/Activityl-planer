import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ActivityCard({
  title,
  area,
  country,
  description,
  toggleFavorite,
  liked,
}) {
  return (
    <li>
      {/* <FavoriteButton liked={liked} toggleFavorite={toggleFavorite}/> */}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li>{area}</li>
        <li>{country}</li>
      </ul>
    </li>
  );
}
