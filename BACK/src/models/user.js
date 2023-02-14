const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
    },
    city: String,
    address: String,
    phone: String,
    provider: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    payMethod: Object,
    deleteLogic: {
      type: Boolean,
      default: false,
    },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    cart:[{
      type: Schema.Types.ObjectId,
      ref: "Cart",
    }],
    sales: [
      {
        type: Schema.Types.ObjectId,
        ref: "Sales",
      },
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Orders"
      }
    ]
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// userSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//   },
// });

userSchema.plugin(uniqueValidator)

const User = model("User", userSchema);

module.exports = User;
