import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controller/tasks.controller';
import { taskProviders } from './services/tasks.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { taskMongoProviders } from './services/task-mongo.providers';
import { MTask } from './model/tasks-mongo.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [MongooseModule.forFeature([{ name: 'Task', schema: MTask }])],
  imports: [TypeOrmModule.forFeature([MTask])],
  providers: [TasksService, ...taskProviders],
  controllers: [TasksController],
})
export class TasksModule {}
