import { Request, Response } from 'express';
import { LeccionService } from '../services/LeccionService';
import { LeccionServiceImpl } from '../services/LeccionServiceImpl';
import { Leccion } from '../models/Leccion';

export class LeccionController {
    private leccionService: LeccionService;

    constructor() {
        this.leccionService = new LeccionServiceImpl();
    }

    async findAll(req: Request, res: Response) {
        console.log('Lección - findAll');
        try {
            const lecciones: Leccion[] = await this.leccionService.findAll();
            res.status(200).json(lecciones);
        } catch (error) {
            res.status(500).json({ message: 'Lecciones no encontradas' });
        }
    }
}
