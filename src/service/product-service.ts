import { ICreateProductRequest } from "../requests/createProductRequest";
import { IUpdateProductRequest } from "../requests/updateProductRequest";
import { IProduct } from "../interface/product";
import Product from "../schema/product";

// Service class to communicate with the database
export class ProductService {
  constructor() {}

  // returns a product by finding it using id provided from the argument
  public async getProduct(id: string): Promise<IProduct> {
    return await Product.findById(id);
  }

  // returns all the available products from the database collection
  public async getAllProduct(): Promise<IProduct[]> {
    return await Product.find();
  }

  // creates a product using the provided details
  public async createProduct(
    productDetails: ICreateProductRequest
  ): Promise<IProduct> {
    const newProduct = {
      name: productDetails.name,
      description: productDetails.description,
      price: Number(productDetails.price),
    };

    return await Product.create(newProduct);
  }

  // returns a product by finding and updating it using id and provided data
  public async updateProduct(
    id: string,
    updates: IUpdateProductRequest
  ): Promise<IProduct> {
    return await Product.findByIdAndUpdate(id, updates);
  }

  // removes the product from the database
  public async deleteProduct(id: string): Promise<IProduct> {
    return await Product.findByIdAndDelete(id);
  }
}
