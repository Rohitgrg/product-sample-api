import { NextFunction, Request, Response } from "express";
import { ProductService } from "../service/product-service";
import { IProduct } from "../interface/product";
import { ICreateProductRequest } from "../requests/createProductRequest";
import { IUpdateProductRequest } from "../requests/updateProductRequest";

export class ProductController {
  private _productService: ProductService;

  public constructor() {
    this._productService = new ProductService();
  }

  public async getAllProduct(req: Request, res: Response) {
    try {
      const products: IProduct[] = await this._productService.getAllProduct();
      if (products === null) throw new Error("No products found");
      return res.json(products).status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

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
