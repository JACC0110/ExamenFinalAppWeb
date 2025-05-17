import express from "express";
import { sequelize } from "./config/database";
import cors from "cors";
import instructorRoutes from "./routes/InstructorRoutes";
import cursoRoutes from "./routes/CursoRoutes";
import leccionRoutes from "./routes/LeccionRoutes";
import perfilInstructorRoutes from "./routes/PerfilInstructorRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/instructores', instructorRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/lecciones', leccionRoutes);
app.use('/api/perfiles_intructor', perfilInstructorRoutes);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is runnig on port 3000');
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the databae: ', error)
    });