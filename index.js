const env = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const phoneRoutes = require("./routes/phoneRoutes");
const sequelize = require("./database/db");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/products", phoneRoutes);

const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized");

    app.listen(env.parsed.PORT, () => {
      console.log(`Server running on http://localhost:${env.parsed.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();
