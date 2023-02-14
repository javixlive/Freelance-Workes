const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ordersSchema = new Schema(
  {
    purchaseId: { type: String, required: true },
    status: String,
    userMail: String,
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    buyerId: { type: Schema.Types.ObjectId, ref: "User" },
    evaluated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

ordersSchema.plugin(uniqueValidator);

const Orders = model("Orders", ordersSchema);

module.exports = Orders;
