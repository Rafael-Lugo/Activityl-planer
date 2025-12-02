import Image from "next/image";

export default function ActivityCard({ title, area, country, description }) {
  return (
    <>
      <li>
        <section>{title}</section>
        <article>{description}</article>
        <ul>
          <li>{area}</li>
          <li>{country}</li>
        </ul>
        <p></p>
      </li>
    </>
  );
}
