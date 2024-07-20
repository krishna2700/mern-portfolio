require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectToDB = require("./config/dbConfig");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// CORS configuration
const whitelist = [
  "http://localhost:3000",
  "https://mern-portfolio-client-rt8c.onrender.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 3690;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
