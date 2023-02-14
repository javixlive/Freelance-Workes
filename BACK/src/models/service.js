const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      secure_url: String,
      public_id: String
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    reviews: {
      type: Array,
      default: [],
    },
    rating: {
      type: Array,
      default: [],
    },
    country: {
      type: String,
      required: true
    },
    average:{
      type:Number,
      default: 0
    },
    deleteLogic: {
      type: Boolean,
      default: false,
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Service = model("Service", serviceSchema);

module.exports = Service;
