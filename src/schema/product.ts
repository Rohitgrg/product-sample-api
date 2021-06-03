import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "../interface/product";

const productSchema: Schema = new Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
