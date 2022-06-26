import { Task } from '../model/tasks.model';
import { TASK_REPOSITORY } from '../../../common/constants';
import { MTask } from '../model/tasks-mongo.model';

export const taskMongoProviders = [
  {
    name: TASK_REPOSITORY,
    schema: MTask,
  },
];
