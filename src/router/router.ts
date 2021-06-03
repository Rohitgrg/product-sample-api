import express, { NextFunction, Request, Response, Router } from "express";
import { ProductController } from "../controller/product-controller";

// router class to group all the routes together forming apis
export class ApplicationRouter {
  private _router: Router = express.Router();
  private _productController: ProductController = new ProductController();

  constructor() {
    this.initProductRouter();
  }

  public getRouter(): Router {
    return this._router;
  }

  // initialize the routes needed in this application
  private initProductRouter() {
    this._router
      .route("/products")
      .get((req: Request, res: Response) =>
        this._productController.getAllProduct(req, res)
      )
      .post((req: Request, res: Response) => {
        this._productController.createProduct(req, res);
      });

    this._router
      .route("/products/:id")
      .get((req: Request, res: Response) =>
        this._productController.getProduct(req, res)
      )
      .put((req: Request, res: Response) => {
        this._productController.updateProduct(req, res);
      })
      .delete((req: Request, res: Response) => {
        this._productController.deleteProduct(req, res);
      });
  }
}
