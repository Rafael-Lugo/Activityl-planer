import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

async function geocode(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      query
    )}&format=json&limit=1`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ActivityPlanner/1.0 (your-email@example.com)',
        'Accept': 'application/json',
      },
    });

    // Prüfe ob Response OK ist
    if (!response.ok) {
      console.error(`Nominatim error: ${response.status} ${response.statusText}`);
      return { latitude: null, longitude: null };
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Nominatim returned non-JSON response');
      return { latitude: null, longitude: null };
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return { latitude: null, longitude: null };
    }
    
    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    return { latitude: null, longitude: null };
  }
}

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const activities = await Activity.find().populate("categories");
    response.status(200).json(activities);
    return;
  }
  if (request.method === "POST") {
    try {
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
    } catch (error) {
      console.error("POST /api/activities error:", error);
      response.status(500).json({ 
        error: "Failed to create activity",
        message: error.message 
      });
      return;
    }
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
