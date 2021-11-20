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
import { UserComment } from 'src/user-comment/user-comment.model';
import { User } from 'src/user/user.model';
import { HouseInterface } from './house.interface';

@Table
export class House extends Model implements HouseInterface {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    price: string;

    @Column
    type: string;

    @Column
    city: string;

    @Column
    address: string;

    @Column
    furnitureType: string;

    @Column
    bedroom: number;

    @Column
    toilet: number;

    @Column
    diningroom: number;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    image: Array<String>;

    @Column({ type: DataType.STRING(3000) })
    detail: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User

    @HasMany(() => UserComment)
    userComment: UserComment;

}