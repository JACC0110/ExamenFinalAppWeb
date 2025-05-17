import { Instructor } from "../models/Instructor";
import { InstructorService } from "./InstructorService";
import { InstructorRepository } from "../repositories/InstructorRepository";

export class InstructorServiceImpl implements InstructorService {
    private InstructorRepository: InstructorRepository;

    constructor() {
        this.InstructorRepository = new InstructorRepository();
    }

    async findAll(): Promise<Instructor[]> {
        return await this.InstructorRepository.findAll();
    }
}
