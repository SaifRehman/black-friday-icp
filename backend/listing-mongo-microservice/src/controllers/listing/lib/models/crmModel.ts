import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    Name:{
        type: String
    },
    Image: {
        type: String
    },
    Price: {
        type: String 
    }
});