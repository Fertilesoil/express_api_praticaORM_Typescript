import { Router } from "express";
import { SubjectController } from "./Controllers/SubjectController";
import { RoomController } from "./Controllers/RoomController";

const routes = Router();

routes.post("/api/subject", new SubjectController().createSubject);
routes.post("/api/room", new RoomController().createRoom);

export default routes;