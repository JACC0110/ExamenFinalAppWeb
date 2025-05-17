import { Request, Response } from "express";
import { PerfilInstructorService } from "../services/PerfilInstructorService";
import { PerfilInstructorServiceImpl } from "../services/PerfilInstructorServiceImpl";
import { PerfilInstructor } from "../models/PerfilInstructor";

export class PerfilInstructorController {
    private perfilInstructorService: PerfilInstructorService;

    constructor() {
        this.perfilInstructorService = new PerfilInstructorServiceImpl();
    }

    async findAll(req: Request, res: Response) {
        console.log('PerfilInstructor - findAll');
        try {
            const perfiles: PerfilInstructor[] = await this.perfilInstructorService.findAll();
            res.status(200).json(perfiles);
        } catch (error) {
            res.status(500).json({ message: 'Perfiles de Instructor no encontrados' });
        }
    }
}
