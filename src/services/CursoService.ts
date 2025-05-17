import { Curso } from "../models/Curso";

export interface CursoService {
    findAll(): Promise<Curso[]>;
}
