import { Document } from "mongoose";

// holds the structure for the product in the database
export interface IProduct extends Document {
  id: string;
  name?: string;
  description?: string;
  price?: number;
}
