require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors"); // Import cors
const connectToDB = require("./config/dbConfig");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// Configure CORS
app.use(
  cors({
    origin: "https://mern-portfolio-client-rt8c.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 3690;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
