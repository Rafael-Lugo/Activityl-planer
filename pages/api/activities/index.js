import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const activities = await Activity.find().populate("categories");
    response.status(200).json(activities);
    return;
  }
  if (request.method === "POST") {
    const activityData = request.body;
    await Activity.create(activityData);
    response.status(201).json({ status: "Activity created." });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
