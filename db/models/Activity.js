import mongoose from "mongoose";

const { Schema } = mongoose;
const activitySchema = new Schema({
  title: String,
  categories: String,
  area: String,
  country: String,
  description: String,
  imagenUrl: String,
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
