import { ConfigService } from '@nestjs/config';
import { createConnection } from 'typeorm';
import { MTask } from '../tasks/model/tasks-mongo.model';

export const databaseProviders = [
  {
    provide: 'database',
    useFactory: async (configService: ConfigService) => {
      const { url } = configService.get('database');

      const connection = await createConnection({
        type: 'mongodb',
        url: 'mongodb+srv://SALEH:5u1AuUyKCKNmlzlL@saleh.ctojf.mongodb.net/?retryWrites=true&w=majority',
        synchronize: true,
        useNewUrlParser: false,
        entities: [MTask],
      });
      return connection;
    },
    inject: [ConfigService],
  },
];
