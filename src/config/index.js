import path from "path";
import dotenv from "dotenv";
require("dotenv").config({ path: path.join(__dirname, "../", ".env") });
export const environment = process.env.NODE_ENV || "development";
export const port = process.env.PORT || 3000;
export const mailgun_api_key = process.env.MAILGUN_KEY;
export const mailgun_domain = process.env.MAILGUN_DOMAIN;

export default {
  environment,
  port,
  mailgun_api_key,
  mailgun_domain
};
