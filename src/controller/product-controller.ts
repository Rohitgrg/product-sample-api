import { NextFunction, Request, Response } from "express";
import { ProductService } from "../service/product-service";
import { IProduct } from "../interface/product";
import { ICreateProductRequest } from "../requests/createProductRequest";
import { IUpdateProductRequest } from "../requests/updateProductRequest";

// controller class directing the flow of data from products api to services
export class ProductController {
  private _productService: ProductService;

  public constructor() {
    this._productService = new ProductService();
  }

  // gets a list of available products from the product service
  public async getAllProduct(req: Request, res: Response) {
    try {
      const products: IProduct[] = await this._productService.getAllProduct();
      if (products === null) throw new Error("No products found");
      return res.json(products).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // gets the products from the product service based on the id provided from the route
  public async getProduct(req: Request, res: Response) {
    try {
      const productId: string = req.params.id;
      const product: IProduct = await this._productService.getProduct(
        productId
      );

      if (product === null) throw new Error("No such product found");
      return res.json(product).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // validates the request body to create a new product
  public async createProduct(req: Request, res: Response) {
    try {
      if (!req.body) throw new Error("Invalid Request");
      const createProductRequest: ICreateProductRequest = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      };

      const product: IProduct = await this._productService.createProduct(
        createProductRequest
      );
      if (product === null) throw new Error("No such product found");

      return res.json(product).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // validates the request body and param to find and update the product
  public async updateProduct(req: Request, res: Response) {
    try {
      const updates: IUpdateProductRequest = {
        ...req.body,
      };

      const product: IProduct = await this._productService.updateProduct(
        req.params.id,
        updates
      );
      if (product === null) throw new Error("No such product found");

      return res.json({ status: "success" }).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // uses the product id from the request param to delete a product
  public async deleteProduct(req: Request, res: Response) {
    try {
      const product: IProduct = await this._productService.deleteProduct(
        req.params.id
      );

      if (product === null) throw new Error("No such product found");
      return res.json({ status: "deleted" }).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
