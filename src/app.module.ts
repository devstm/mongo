import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configFile from '../config';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersService } from './modules/users/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MTask } from './modules/tasks/model/tasks-mongo.model';
import { MUser } from './modules/users/model/user-mongo.modle';
import { DataSource } from 'typeorm';
config.config();
@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_MONGO,
      synchronize: true,
      useNewUrlParser: true,
      entities: [MTask, MUser],
    }),
    ConfigModule.forRoot({
      load: [configFile],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
