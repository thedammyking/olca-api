import { Router } from "express";
import login from "./login";
import register from "./register";

const auth = Router();

auth.post("/register", register);
auth.post("/login", login);

export default auth;
