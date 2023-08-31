import express from "express";
const router: express.Router = express.Router();
import * as userRouter from "../controller/userController";

// routes
router.get("/", userRouter.getUsers);
router.post("/", userRouter.postUser);

export default router;
