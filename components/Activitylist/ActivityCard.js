import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({
  _id,
  title,
  area,
  country,
  description,
}) {
  return (
    <li>
      <Link href={`/activities/${_id}`}>
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&crop=center"
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
