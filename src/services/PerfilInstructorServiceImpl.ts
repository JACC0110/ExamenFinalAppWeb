import { PerfilInstructor } from "../models/PerfilInstructor";
import { PerfilInstructorRepository } from "../repositories/PerfilInstructorRepository";
import { PerfilInstructorService } from "./PerfilInstructorService";

export class PerfilInstructorServiceImpl implements PerfilInstructorService {
    private perfilInstructorRepository: PerfilInstructorRepository;

    constructor() {
        this.perfilInstructorRepository = new PerfilInstructorRepository();
    }

    async findAll(): Promise<PerfilInstructor[]> {
        return await this.perfilInstructorRepository.findAll();
    }
}
