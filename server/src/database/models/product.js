import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

export const Product = model("product", productSchema);
