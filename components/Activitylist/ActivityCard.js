export default function ActivityCard({ title, area, country, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li>{area}</li>
        <li>{country}</li>
      </ul>
    </li>
  );
}
