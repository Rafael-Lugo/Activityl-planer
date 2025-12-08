import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import {
  Card,
  CardImage,
  CardTitle,
  CardBookmarkWrapper,
} from "../Style-General";

export default function ActivityCard({
  _id,
  title,
  area,
  country,
  categories,
  toggleLiked,
  likedActivityIds,
  imageUrl,
}) {
  const isLiked = likedActivityIds?.includes(_id);

  console.log("ActivityCard imageUrl:", imageUrl);

  return (
    <li>
      <Card>
        <Link href={`/activities/${_id}`} legacyBehavior>
          <a>
            <CardImage src={imageUrl} alt={title} height={300} width={300} />
            
            <CardTitle>{title}</CardTitle>
          </a>
        </Link>
        <CardBookmarkWrapper>
          <FavoriteButton
            _id={_id}
            toggleLiked={toggleLiked}
            isLiked={isLiked}
          />
        </CardBookmarkWrapper>
        
        <ul>
          <li>{area}</li>
          <li>{country}</li>
        </ul>
        {categories &&
          categories.map((category) => (
            <p key={category._id}>{category.name}</p>
          ))}
      </Card>
    </li>
  );
}
