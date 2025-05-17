import { PerfilInstructor } from "../models/PerfilInstructor";

export interface PerfilInstructorService {
    findAll(): Promise<PerfilInstructor[]>;
}
