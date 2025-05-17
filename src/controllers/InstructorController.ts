import { Request, Response } from "express";
import { InstructorService } from "../services/InstructorService";
import { InstructorServiceImpl } from "../services/InstructorServiceImpl";
import { Instructor } from "../models/Instructor";

export class InstructorController {
    private instructorService: InstructorService;

    constructor() {
        this.instructorService = new InstructorServiceImpl();
    }

    async findAll(req: Request, res: Response) {
        console.log('Instructor - findAll');
        try {
            const instructores: Instructor[] = await this.instructorService.findAll();
            res.status(200).json(instructores);
        } catch (error) {
            res.status(500).json({ message: 'Instructores no encontrados' });
        }
    }
}
