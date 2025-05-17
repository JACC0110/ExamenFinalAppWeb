import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Curso } from './Curso';

@Table({
    tableName: 'leccion',
    timestamps: false,
})
export class Leccion extends Model {
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
        type: DataType.STRING(100),
        allowNull: false
    })
    contenido!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    numero_orden!: number;

    @ForeignKey(() => Curso)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    curso_id!: number;

    @BelongsTo(() => Curso)
    curso!: Curso;
}
