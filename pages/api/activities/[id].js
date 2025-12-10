import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handlerDetails(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    const existing = await Activity.findById(id);
    if (!existing) {
      response.status(404).json({ status: "Not found" });
      return;
    }

    if (existing.imageUrl?.public_id) {
      try {
        await cloudinary.v2.uploader.destroy(existing.imageUrl.public_id);
      } catch (error) {
        console.error("Cloudinary delete failed:", error);
      }
    }

    await Activity.findByIdAndDelete(id);
    response
      .status(200)
      .json({ status: `Activity ${id} succsessfully deleted.` });
    return;
  }

  if (request.method === "GET") {
    const activity = await Activity.findById(id).populate("categories");

    if (!activity) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(activity);
    return;
  }
  if (request.method === "PUT") {
    const existing = await Activity.findById(id);
    if (!existing) {
      response.status(404).json({ status: "Not found" });
    }

    if (request.body.imageUrl && existing.imageUrl?.public_id) {
      await cloudinary.v2.uploader.destroy(existing.imageUrl.public_id);
    }

    const updatedActivity = await Activity.findByIdAndUpdate(
      id,
      { ...request.body },
      { new: true }
    );

    response.status(200).json(updatedActivity);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
