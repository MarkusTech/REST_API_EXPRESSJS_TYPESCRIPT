import express from "express";
const router: express.Router = express.Router();
import * as apiController from "../controller/apiController";

// routes
router.get("/", apiController.getAPI);

export default router;
