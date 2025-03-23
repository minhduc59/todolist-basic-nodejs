const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const routefile = require("./routes/web");
const expressValidator = require("express-validator");

// Kết nối tới MongoDB
mongoose
  .connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/**
 * Middlewares
 */
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(expressValidator());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Routes
 */
app.use("/api", routefile);

const port = process.env.PORT;
app.listen(port, () => console.log(`Connection to Port : ${port} ...`));
