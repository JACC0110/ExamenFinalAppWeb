import { Curso } from "../models/Curso";

export class CursoRepository {

    async findAll(): Promise<Curso[]> {
        return await Curso.findAll();
    }

}