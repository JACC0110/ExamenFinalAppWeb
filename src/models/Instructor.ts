import { Table, Column, Model, DataType, HasOne, HasMany } from 'sequelize-typescript';
import { PerfilInstructor } from './PerfilInstructor';
import { Curso } from './Curso';

@Table({
    tableName: 'instructor',
    timestamps: false,
})
export class Instructor extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true
    })
    username!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    password!: string;

    @HasOne(() => PerfilInstructor)
    perfil!: PerfilInstructor;

    @HasMany(() => Curso)
    cursos!: Curso[];
}
