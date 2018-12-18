import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    FirstName:{
        type: String
    },

    LastName:{
        type: String
    },

    DOB: {
        type: String
    },

    Gender: {
        type: String
    },

    EID: {
        type: String
    },

    PassportNo: {
        type: String
    },

    Emirate: {
        type: String
    },
    PreferredLocation: {
        type: String 
    },

    Phone: {
        type: String
    },

    Email: {
        type: String
    }

});