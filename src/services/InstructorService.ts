import { Instructor } from "../models/Instructor";

export interface InstructorService {
    findAll(): Promise<Instructor[]>;
}
