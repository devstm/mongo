import {
  Table,
  Column,
  Model,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../../modules/users/model/users.model';

const { STRING, BOOLEAN, INTEGER } = DataType;

@Table
export class Task extends Model {
  @Column(STRING)
  title: string;

  @Column(STRING)
  description: string;

  @Column(BOOLEAN)
  status: boolean;

  @ForeignKey(() => User)
  @Column(INTEGER)
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => User)
  user: User;
}
