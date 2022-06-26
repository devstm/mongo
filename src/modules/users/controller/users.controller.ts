import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserLoginDTO, UserSignUpDTO } from '../dto';
import { IUser } from '../../../common/types';
import { User } from '../model/users.model';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '../../../common/guards';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  signup(@Body() userSignup: UserSignUpDTO): Promise<User> {
    return this.userService.create(userSignup);
  }
  @Post('login')
  login(@Body() userLogin: UserLoginDTO): Promise<IUser> {
    return this.userService.login(userLogin);
  }
  @UseGuards(AuthGuard)
  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) id: number): Promise<any> {
    return this.userService.deleteUser(id);
  }
}
