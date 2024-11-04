import mongoose from "mongoose";

async function connectDatabase() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `MongoDB connected!! DB Host :  ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("ERROR");
    throw err;
  }
}

export default connectDatabase;
