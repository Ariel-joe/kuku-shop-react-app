import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Kukushop");
    console.log("db connected succesfully");
  } catch (error) {
    console.error(error.message);
  }
};
