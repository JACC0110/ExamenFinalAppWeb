import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Instructor } from './Instructor';

@Table({
    tableName: 'perfil_instructor',
    timestamps: false,
})
export class PerfilInstructor extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    biografia?: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    redes_sociales?: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: true
    })
    especializacion?: string;

    @ForeignKey(() => Instructor)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true
    })
    instructor_id!: number;

    @BelongsTo(() => Instructor)
    instructor!: Instructor;
}
