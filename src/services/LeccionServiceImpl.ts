import { Leccion } from "../models/Leccion";
import { LeccionService } from "./LeccionService";
import { LeccionRepository } from "../repositories/LeccionRepository";

export class LeccionServiceImpl implements LeccionService {
    private LeccionRepository: LeccionRepository;

    constructor() {
        this.LeccionRepository = new LeccionRepository();
    }

    async findAll(): Promise<Leccion[]> {
        return await this.LeccionRepository.findAll();
    }
}
