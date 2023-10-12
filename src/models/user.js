import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      default: "John Doe",
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      default: "hello world",
    },
  },
  {
    timeStamps: true,
  }
);

export default mongoose.model("userModel", User);
