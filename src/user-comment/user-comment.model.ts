import {
    AutoIncrement,
    BelongsTo,
    Column,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { House } from 'src/house/house.model';
import { User } from 'src/user/user.model';
import { UserCommentInterface } from './user-comment.interface';

@Table
export class UserComment extends Model implements UserCommentInterface {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => House)
    @Column
    houseId: number;

    @Column
    comment: string;

    @BelongsTo(() => House)
    exercise: House;

    @BelongsTo(() => User)
    user: User;
}
