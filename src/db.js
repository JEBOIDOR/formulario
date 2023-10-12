import mongoose from "mongoose";

const URI = "mongodb+srv://JEBOIDOR:Pelirrojas13@cluster0.128gj8k.mongodb.net/";

export const CONNECT_DB = async () => {
  try {
    await mongoose.connect(URI || "mongodb://cluster/localhost");
    console.log("<<Database is connected>>");
  } catch (error) {
    console.error("Uppsss something goes wrong ", error);
  }
};
