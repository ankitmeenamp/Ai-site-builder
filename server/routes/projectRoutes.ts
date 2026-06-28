import express from "express";
import { protect } from "../middlewares/auth.js";
import { makeRevision } from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post('/revision/:projctId',protect, makeRevision) 