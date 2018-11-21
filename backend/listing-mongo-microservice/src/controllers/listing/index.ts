import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { ItemController } from "../listing/lib/controllers/crmController";

import "reflect-metadata";
import { runInNewContext } from "vm";
class ListingMongoController {
  public itemController: ItemController = new ItemController();
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/healthz", (_, res) => {
      res.status(200).send("healthz");
    });

    this.router.get(
      "/listItems",
      (req: Request, res: Response, next: NextFunction) => {
        next();
      },
      this.itemController.getItem
    );

    this.router.post(
      "/listItems",
      (req: Request, res: Response, next: NextFunction) => {
        next();
      },
      this.itemController.addNewItem
    );

    this.router.get(
      "/listItems/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.itemController.getItemById
    );

    this.router.put(
      "/listItems/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.itemController.updateItem
    );

    this.router.delete(
      "/listItems/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.itemController.deleteItem
    );
  }
}

export default new ListingMongoController().router;
