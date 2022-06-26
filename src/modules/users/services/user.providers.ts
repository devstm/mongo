import { User } from '../model/users.model';
import { USER_REPOSITORY } from '../../../common/constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
