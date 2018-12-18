import * as mongoose from "mongoose";
import { ItemSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Item = mongoose.model("amro", ItemSchema);
export class ItemController {
  public addNewItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    let newItem = new Item(req.body);
    newItem.save((err, data) => {
      if (err) {
        res.status(404).json({ err });
        return;
    }
      res.json(data);
    });
  }
  public getItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.find({}, (err, data) => {
      if (err) {
        res.status(404).json({ err });
        return;
    } else {
        res.status(200).send(data);
      }
    });
  }
  public getItemById(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.findById(req.params.ID, (err, data) => {
      if (err) {
        res.status(404).json({ err });
        return;      } else {
        res.status(200).send(data);
      }
    });
  }
  public updateItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.findOneAndUpdate(
      { _id: req.params.ID }, req.body, { new: true },(err, data) => {
        if (err) {
            res.status(404).json({ err });
            return;        }
        res.json(data);
      }
    );
  }

  public deleteItem (req: Request, res: Response) {   
    res.setHeader('Content-Type', 'application/json');        
    Item.deleteOne({ _id: req.params.ID }, (err) => {
        if(err){
            res.status(404).json({ err });
            return;
        }
        res.json({ message: "success"});
    });
}
}
