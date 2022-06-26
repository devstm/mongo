import { Task } from '../model/tasks.model';
import { TASK_REPOSITORY } from '../../../common/constants';
import { MTask } from '../model/tasks-mongo.model';

export const taskProviders = [
  {
    provide: 'MTASK_REPOSITORY',
    useValue: MTask,
  },
];
