import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query
  )}&format=json&limit=1`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data || data.length === 0) {
    return { latitude: null, longitude: null };
  }
  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon),
  };
}

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const activities = await Activity.find().populate("categories");
    response.status(200).json(activities);
    return;
  }
  if (request.method === "POST") {
    const activityData = request.body;
    console.log("📌 POST BODY:", activityData);
    const coords = await geocode(
      `${activityData.area}, ${activityData.country}`
    );
    console.log("📌 GEOCODING RETURN:", coords);

    activityData.latitude = coords.latitude;
    activityData.longitude = coords.longitude;

    const created = await Activity.create(activityData);
    console.log("📌 DB GESPEICHERT:", created);

    response.status(201).json({ status: "Activity created." });
    return;
  }
  if (request.method === "PUT") {
    const { id } = request.query;
    const { longitude, latitude } = request.body;

    await Activity.findByIdAndUpdate(
      id,
      { latitude, longitude },
      { new: true }
    );
    response.status(200).json({ status: "OK!" });
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
