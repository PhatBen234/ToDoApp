const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db/connect.js");

dotenv.config({path: '.env'})
const PORT = process.env.PORT || 8080

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(process.env.MONGO_URL);
});
