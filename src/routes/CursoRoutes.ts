import { Router } from "express";
import { CursoController } from "../controllers/CursoController";

const router = Router();
const cursoController = new CursoController();

router.get('/', cursoController.findAll.bind(cursoController));

export default router;
