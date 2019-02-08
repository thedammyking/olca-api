import { Router } from "express";
import auth from "./auth";

const routes = Router();

routes.use("/auth", auth);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Lifexone API!" });
});

export default routes;
