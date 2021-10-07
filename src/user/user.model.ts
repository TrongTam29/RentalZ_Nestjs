import {
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    IsEmail,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
import { House } from 'src/house/house.model';
import { UserInterface } from './user.interface';

@Table
export class User extends Model implements UserInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    image: string;

    @HasMany(() => House)
    house: House;

}