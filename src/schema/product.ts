import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "../interface/product";

// product schema for the database
const productSchema: Schema = new Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
