import dotenv from "dotenv";
import connectDatabase from "./database/atlas.connection.database.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error : ", err);
  });
