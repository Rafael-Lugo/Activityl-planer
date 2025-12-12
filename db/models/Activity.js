import mongoose from "mongoose";
import "./Category";

const { Schema } = mongoose;

const activitySchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  imageUrl: {
    width: { type: String, required: true },
    height: { type: String, required: true },
    url: { type: String, required: true },
    public_id:{type: String, required:true},
  },
  categories: { type: [Schema.Types.ObjectId], ref: "Category" },
  description: { type: String },
  area: { type: String },
  country: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
