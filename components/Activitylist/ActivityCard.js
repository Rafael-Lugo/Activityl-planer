import Image from "next/image";

export default function ActivityCard({ title, area, country, description }) {
  return (
    <>
      <li>
        <article>
          <h3>{title}</h3>
        </article>
        <article>
          <p>{description}</p>
        </article>
        <ul>
          <li>{area}</li>
          <li>{country}</li>
        </ul>
        <p></p>
      </li>
    </>
  );
}
