import dbConnect from "../../../db/connect";
import Activity from "../../../db/models/Activity";

export default async function handlerDetails(request, response) {
  await dbConnect();
  const { title } = request.query;

  if (request.method === "GET") {
    try {
      
      const activityByName = await Activity.findOne({ title: title });
      
      if (!activityByName) {
        return response.status(404).json({ status: "Not Found" });
      }

      const activity = await Activity.findById(activityByName._id).populate("categories");

      response.status(200).json(activity);
    } catch (error) {
      response.status(500).json({ message: "Error fetching activity" });
    }
  }
}