import { Request, Response } from 'express';
import { CursoService } from '../services/CursoService';
import { CursoServiceImpl } from '../services/CursoServiceImpl';
import { Curso } from '../models/Curso';

export class CursoController {
    private cursoService: CursoService;

    constructor() {
        this.cursoService = new CursoServiceImpl();
    }

    async findAll(req: Request, res: Response) {
        console.log('Curso - findAll');
        try {
            const cursos: Curso[] = await this.cursoService.findAll();
            res.status(200).json(cursos);
        } catch (error) {
            res.status(500).json({ message: 'Cursos no encontrados' });
        }
    }
}
