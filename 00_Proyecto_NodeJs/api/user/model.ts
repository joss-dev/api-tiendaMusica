import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    requied: true,
  },
  role: {
    type: String,
    enum: ["admin", "comprador", "vendedor" ],
    default: "comprador",
  },
  avatar: {
    type: String,
    default: "",
  },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password ?? "", saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
  }
});

const User = model("User", userSchema);

export default User;
