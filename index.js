const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || process.env.DOOR;

app.get("/", (req, res) => {
  res.send("Olá");
});

app.listen(port, (req, res) => console.log(`🚀 The Server is running on port http://localhost:${port}`));
