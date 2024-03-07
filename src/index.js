import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`the server is listening at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
