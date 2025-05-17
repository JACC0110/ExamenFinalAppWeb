import { Curso } from "../models/Curso";
import { CursoService } from "./CursoService";
import { CursoRepository } from "../repositories/CursoRepository";

export class CursoServiceImpl implements CursoService {
    private CursoRepository: CursoRepository;

    constructor() {
        this.CursoRepository = new CursoRepository();
    }

    async findAll(): Promise<Curso[]> {
        return await this.CursoRepository.findAll();
    }
}
