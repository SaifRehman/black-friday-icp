import * as mongoose from "mongoose";
import { ItemSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Item = mongoose.model("Flight", ItemSchema);
export class ItemController {
  public addNewItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    let newFlight = new Item(req.body);
    newFlight.save((err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
    }
      res.json(flight);
    });
  }
  public getItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.find({}, (err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
    } else {
        res.status(200).send(flight);
      }
    });
  }
  public getItemById(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.findById(req.params.ID, (err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;      } else {
        res.status(200).send(flight);
      }
    });
  }
  public updateItem(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    Item.findOneAndUpdate(
      { _id: req.params.ID }, req.body, { new: true },(err, flight) => {
        if (err) {
            res.status(404).json({ err });
            return;        }
        res.json(flight);
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
