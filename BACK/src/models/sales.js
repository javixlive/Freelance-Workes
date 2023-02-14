const { Schema, model } = require("mongoose");

const salesSchema = new Schema(
    {   
        name: String,
        price: {
            type: Number,
            required: true,
        },
        payMethod: {
            type: Object,
            //required: true,
        },
        note: {
            type: String,
        },
        status: {
            type: Boolean,
            //required: true, 
        },
        serviceId: { type: Schema.Types.ObjectId, ref: "Service" },
        providerId: { type: Schema.Types.ObjectId, ref: "User" },
        claimerId: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Sales = model('Sales', salesSchema)

module.exports = Sales