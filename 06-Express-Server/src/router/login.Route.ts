import express from "express";
const router: express.Router = express.Router();
import * as loginController from "../controller/login";

router.post("/register", loginController.registerUser);

export default router;
