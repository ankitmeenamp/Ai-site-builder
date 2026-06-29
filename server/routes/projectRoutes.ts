import express from "express";
import { protect } from "../middlewares/auth.js";
import { deleteProject, getProjectById, getProjectPreview, getPublishedProjects, makeRevision, rollbackToVersion, saveProjectCode } from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post('/revision/:projctId',protect, makeRevision) 
projectRouter.put('/save/:projctId',protect, saveProjectCode) 
projectRouter.get('/rollback/:projctId/:versionId',protect, rollbackToVersion) 
projectRouter.delete('/:projctId',protect, deleteProject) 
projectRouter.get('/preview/:projctId',protect, getProjectPreview) 
projectRouter.get('/published', getPublishedProjects) 
projectRouter.get('/published/:projectId', getProjectById) 

export default projectRouter ;