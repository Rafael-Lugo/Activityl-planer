import Link from "next/link";

export default function ActivityCard({
  _id,
  title,
  country,
  categories,
  area,
  imageUrl
}) {
  return (
    <li>
      <Link href={`/activities/${_id}`}>
        <img src={imageUrl} alt={title} height={300} width={300} />
      </Link>
      <h3>{title}</h3>
      <ul>
        <li>{area}</li>
        <li>{country}</li>
      </ul>
      {categories &&
        categories.map((category) => <p key={category._id}>{category.name}</p>)}
    </li>
  );
}
