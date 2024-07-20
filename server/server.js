require("dotenv").config();
const express = require("express");
const path = require("path");
const connectToDB = require("./config/dbConfig");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 3690;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
