import {
  Table,
  Column,
  Model,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Task } from '../../../modules/tasks/model/tasks.model';

const { STRING } = DataType;

@Table
export class User extends Model {
  @Column(STRING)
  username: string;

  @Column(STRING)
  phone: string;

  @Column(STRING)
  email: string;

  @Column(STRING)
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => Task)
  tasks: Task[];
}
