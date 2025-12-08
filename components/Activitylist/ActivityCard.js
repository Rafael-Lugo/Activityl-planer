import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import {
  Card,
  CardImage,
  CardTitle,
  CardBookmarkWrapper,
  CardMeta,
  CategoryList,
  CategoryItem,
  CardMetaItem
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
    <>
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
      </Card>

      <CardMeta>
        <CardMetaItem>{area}</CardMetaItem>
        <CardMetaItem>{country}</CardMetaItem>
      </CardMeta>

      {categories && (
        <CategoryList>
          {categories.map((category) => (
            <CategoryItem key={category._id}>{category.name}</CategoryItem>
          ))}
        </CategoryList>
      )}
    </>
  );
}
