import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "errorhandler";
import PrettyError from "pretty-error";
import config from "./config";
import routes from "./routes";

const ENV = config.environment;
const port = config.port;

const app = express();
app.server = http.createServer(app);

// Register Node.js middleware
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

if (ENV === "development") {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  app.use(errorHandler());
}

// Register Routes
// =============================================================================
// all routes will be prefixed with /api
app.use("/api", routes);

// Error handling
// =============================================================================
if (ENV === "development") {
  const pe = new PrettyError();
  pe.skipNodeFiles();
  pe.skipPackage("express");

  app.use((err, req, res, next) => {
    console.log(pe.render(err)); // eslint-disable-line no-console{
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.listen(port, () => {
  console.log(`The server is running`);
});
/* eslint-enable no-console */
