import { Document, ObjectId } from "mongoose";

export interface IProduct extends Document {
  id: string;
  name?: string;
  description?: string;
  price?: number;
}
