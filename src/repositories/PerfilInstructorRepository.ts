import { PerfilInstructor } from "../models/PerfilInstructor";

export class PerfilInstructorRepository {
    async findAll(): Promise<PerfilInstructor[]> {
        return await PerfilInstructor.findAll();
    }
}