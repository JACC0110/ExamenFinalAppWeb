import { Sequelize } from "sequelize-typescript";
import { Instructor } from "../models/Instructor";
import { PerfilInstructor } from "../models/PerfilInstructor";
import { Curso } from "../models/Curso";
import { Leccion } from "../models/Leccion";

export const sequelize = new Sequelize({
    database: "CursosEnLinea",
    username: "postgres",
    password: "password",
    host: "localhost",
    dialect: "postgres",
    models: [Instructor, PerfilInstructor, Curso, Leccion],
});
