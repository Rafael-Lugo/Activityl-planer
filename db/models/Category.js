import mongoose from 'mongoose';


const{Schema} = mongoose
const categorySchema = new Schema({
    name: String,
});

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;