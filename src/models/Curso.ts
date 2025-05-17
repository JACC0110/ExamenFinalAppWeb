import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Instructor } from './Instructor';
import { Leccion } from './Leccion';

@Table({
    tableName: 'curso',
    timestamps: false,
})
export class Curso extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    titulo!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    descripcion!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    duracion!: number;

    @ForeignKey(() => Instructor)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    instructor_id!: number;

    @BelongsTo(() => Instructor)
    instructor!: Instructor;

    @HasMany(() => Leccion)
    lecciones!: Leccion[];
}
