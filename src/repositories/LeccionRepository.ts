import { Leccion } from "../models/Leccion";

export class LeccionRepository {
    async findAll(): Promise<Leccion[]> {
        return await Leccion.findAll();
    }
}
