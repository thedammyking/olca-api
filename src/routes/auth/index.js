import { Router } from "express";
import login from "./login";
import register from "./register";
import reset from "./reset_password";
import forgot from "./forgot_password";

const auth = Router();

auth.post("/register", register);
auth.post("/login", login);
auth.post("/reset", reset);
auth.post("/forgot-password", forgot);

export default auth;
