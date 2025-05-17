import { Leccion } from "../models/Leccion";

export interface LeccionService {

    findAll(): Promise<Leccion[]>;

}
