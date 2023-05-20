import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    city:String,
    email:String,
    city:String,
    postalCode: String,
    streetAdress: String,
    country: String,
    paid:Boolean,

});

export const Order = model?.Order || model('Order', OrderSchema);