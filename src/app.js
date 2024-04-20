const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// init middlewares

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// handle errors

// init routes

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to my website",
  });
});

// init server

module.exports = app;
