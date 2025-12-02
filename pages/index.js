import Link from "next/link";

//dynamischer Link kann nach der pull request erstellt werden

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Link href="/activities/Surfing">Go to Surfing Activity</Link>
    </div>
  );
}


