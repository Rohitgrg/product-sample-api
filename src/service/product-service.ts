import { ICreateProductRequest } from "../requests/createProductRequest";
import { IUpdateProductRequest } from "../requests/updateProductRequest";
import { IProduct } from "../interface/product";
import Product from "../schema/product";

export class ProductService {
  constructor() {}

  async getProduct(id: string): Promise<IProduct> {
    return await Product.findById(id);
  }

  async getAllProduct(): Promise<IProduct[]> {
    return await Product.find();
  }

  async createProduct(
    productDetails: ICreateProductRequest
  ): Promise<IProduct> {
    const newProduct = {
      name: productDetails.name,
      description: productDetails.description,
      price: Number(productDetails.price),
    };

    return await Product.create(newProduct);
  }

  async updateProduct(
    id: string,
    updates: IUpdateProductRequest
  ): Promise<IProduct> {
    return await Product.findByIdAndUpdate(id, updates);
  }

  async deleteProduct(id: string): Promise<IProduct> {
    return await Product.findByIdAndDelete(id);
  }
}
