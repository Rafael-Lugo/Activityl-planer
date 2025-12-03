import dbConnect from "@/db/connect";
import Activity from "@/db/models/Activity";

export default async function handlerDetails(request, response) {
  await dbConnect();
  const { id } = request.query;


if(request.method === "DELETE"){
      await Activity.findByIdAndDelete(id);
      response.status(200).json({status: `Activity ${id} succsessfully deleted.`})
    }

  if (request.method === "GET") {
      const activity = await Activity.findById(id).populate("categories");

      if (!activity) {
        response.status(404).json({status: "Not Found"});
        return;
      }

      response.status(200).json(activity);
      return;
    }
      response.status(405).json({ message: "Method not allowed" });
    
    
    }
  