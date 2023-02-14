const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
