import express  from "express";
import { createUserProject, getUserCredits, getUserProject, getUserProjects, purcheseCredits, togglePublish } from "../controllers/userController.js";
import {protect} from '../middlewares/auth.js'

const userRouter = express.Router();

userRouter.get('/credits',protect, getUserCredits)
userRouter.post('/project',protect, createUserProject)
userRouter.get('/project/:projectId',protect, getUserProject)
userRouter.get('/project/',protect, getUserProjects)
userRouter.get('/publish-toggle/:projectId',protect, togglePublish)
userRouter.post('/purchase-credits',protect, purcheseCredits)

export default userRouter