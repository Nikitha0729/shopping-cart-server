import mongoose from "mongoose";
import { uuid } from "uuidv4";

const cartSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    default: uuid(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: uuid(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Cart", cartSchema, "cart");
