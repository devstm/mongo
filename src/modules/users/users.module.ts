import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';
import { userProviders } from './services/user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  // i cant remove this line because this line
  // Model not initialized: Member \"findOne\" cannot be called. \"User\" needs to be added to a Sequelize instance.
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule {}
