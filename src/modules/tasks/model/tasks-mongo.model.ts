import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class MTask {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  status: boolean;

  @Column()
  description: string;

  @Column()
  userId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
