import { Instructor } from "../models/Instructor";

export class InstructorRepository {

    async findAll(): Promise<Instructor[]> {
        return await Instructor.findAll();
    }

}

