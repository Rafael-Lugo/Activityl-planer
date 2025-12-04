import Link from "next/link";

export default function ActivityCard({ _id, title, area, country, description, imageUrl }) {
  return (
    <li>
      <Link href={`/activities/${_id}`}>
       <img
              src={imageUrl}
              alt={title}
              height={300}
              width={300}
            />
      <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <ul>
        <li>{area}</li>
        <li>{country}</li>
      </ul>
    </li>
  );
}
