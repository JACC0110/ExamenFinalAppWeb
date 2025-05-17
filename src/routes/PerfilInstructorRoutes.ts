import { Router } from "express";
import { PerfilInstructorController } from "../controllers/PerfilInstructorController";

const router = Router();
const perfilInstructorController = new PerfilInstructorController();

router.get('/', perfilInstructorController.findAll.bind(perfilInstructorController));

export default router;
