import BackButton from "./BackButton/BackButton";
import Link from "next/link";
import Image from "next/image";

export default function ActivityDetails({ activity }) {
  if (!activity) {
    return <p>Activity is not found</p>;
  }

  return (
    <>
    <header>
      <h1>{activity.title}</h1>
      </header>
      <main>
      <Link href="/">
        <BackButton />
      </Link>
      <Image
        src={activity.imageUrl}
        alt={activity.title}
        height={300}
        width={300}
      />
      <p>{activity.description}</p>
      <p>Area: {activity.area}</p>
      <p>Country: {activity.country}</p>
      {activity.categories && activity.categories.length > 0 && (
        <section>
          <strong>Categories:</strong>
          {activity.categories.map((category) => (
            <span key={category._id}> {category.name}</span>
          ))}
        </section>
      )}
      </main>
    </>
  );
}
