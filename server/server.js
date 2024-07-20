require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/dbConfig");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 3690;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
