const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const phoneRoutes = require("./routes/phoneRoutes");
const sequelize = require("./database/db");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/phones", phoneRoutes);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronized");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();
