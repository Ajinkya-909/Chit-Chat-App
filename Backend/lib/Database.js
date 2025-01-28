import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_PASSWORD);
    console.log(`DataBase Connected Successfully`);
  } catch (error) {
    console.log(`Error in DataBase Connection : ${error}`);
  }
};
