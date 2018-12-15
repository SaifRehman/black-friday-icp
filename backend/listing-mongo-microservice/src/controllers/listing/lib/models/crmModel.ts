import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    Name:{
        type: String
    },
    Phone: {
        type: String
    },
    Lng: {
        type: String
    },
    Lat: {
        type: String 
    }
});