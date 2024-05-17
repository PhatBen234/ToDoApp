const express = require("express");
const app = express();
const dotenv = require("dotenv");
const tasks = require('./routes/router.js');
const connectDB = require("./database/connect.js");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', tasks);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

startServer();
