import { Router } from "express";
import { InstructorController } from "../controllers/InstructorController";

const router = Router();
const instructorController = new InstructorController();

router.get('/', instructorController.findAll.bind(instructorController));

export default router;
