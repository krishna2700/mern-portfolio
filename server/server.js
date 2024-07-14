require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 3690;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
