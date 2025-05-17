import { Router } from "express";
import { LeccionController } from "../controllers/LeccionController";

const router = Router();
const leccionController = new LeccionController();

router.get('/', leccionController.findAll.bind(leccionController));

export default router;
