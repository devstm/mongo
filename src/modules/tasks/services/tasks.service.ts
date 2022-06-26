import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY, exclude } from '../../../common/constants';
import { taskNotFound } from '../../../common/messages';
import { CustomError } from '../../../common/utils';
import { User } from '../../../modules/users/model/users.model';
import { TaskCreateDTO } from '../dto/taskCreate.dto';
import { Task } from '../model/tasks.model';

@Injectable()
export class TasksService {
  constructor(
    @Inject('MTASK_REPOSITORY')
    private readonly taskModel: typeof Task,
  ) {}
  async getAll(userId: number): Promise<Task[]> {
    return await this.taskModel.findAll({
      where: { userId },
      include: [
        {
          model: User,
          attributes: {
            exclude,
          },
        },
      ],
    });
  }

  async getOne(id: number, userId: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id, {
      include: [
        {
          model: User,
          attributes: {
            exclude,
          },
        },
      ],
    });
    if (!task) {
      throw new CustomError(taskNotFound, 400);
    }
    if (task.userId !== userId) {
      throw new CustomError('You are not authorized', 401);
    }
    return task;
  }

  async create(createTask: TaskCreateDTO): Promise<Task> {
    const { title, description, status, userId } = createTask;
    return await this.taskModel.create({
      title,
      description,
      status,
      userId,
    });
  }

  async update(
    id: number,
    taskUpdate: TaskCreateDTO,
    userID: number,
  ): Promise<any> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new CustomError(taskNotFound, 400);
    }
    if (task.userId !== userID) {
      throw new CustomError('You are not authorized', 401);
    }
    const { title, description, status, userId } = taskUpdate;
    return await this.taskModel.update(
      {
        title,
        description,
        status,
        userId,
      },
      {
        where: { id },
      },
    );
  }
  async delete(id: number, userID: number): Promise<any> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new CustomError(taskNotFound, 400);
    }
    if (task.userId !== userID) {
      throw new CustomError('You are not authorized', 401);
    }
    return await this.taskModel.destroy({
      where: { id },
    });
  }
}
