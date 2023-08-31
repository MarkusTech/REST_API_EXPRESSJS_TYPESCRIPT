import express from "express";
const router: express.Router = express.Router();
import * as userRouter from "../controller/userController";
import appLogger from "../middleware/appLogger";

// routes
router.get("/", appLogger, userRouter.getUsers);
router.post("/", appLogger, userRouter.postUser);

export default router;
