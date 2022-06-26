import { Inject, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcryptjs';
import { User } from '../model/users.model';
import { CustomError, signToken } from '../../../common/utils';
import { UserLoginDTO, UserSignUpDTO } from '../dto';
import { IUser } from '../../../common/types';
import { USER_REPOSITORY } from '../../../common/constants';
import {
  userAlreadyExists,
  userNotFound,
  wrongPassword,
} from '../../../common/messages';
@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userModel: typeof User,
  ) {}

  async create(userSignup: UserSignUpDTO): Promise<User> {
    const { password, username } = userSignup;
    const userWithUsername = await this.userModel.findOne({
      where: { username },
    });
    if (userWithUsername) {
      throw new CustomError(userAlreadyExists, 400);
    }
    const hashedPassword = await hash(password, 10);
    const newUser = { ...userSignup, password: hashedPassword };
    return await this.userModel.create(newUser);
  }

  async login(userType: UserLoginDTO): Promise<IUser> {
    const { username, password } = userType;
    const user = await this.userModel.findOne({
      where: { username },
    });
    if (!user) throw new CustomError(userNotFound, 400);
    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new CustomError(wrongPassword, 400);
    const token = await signToken(user.id);
    const { id, phone, email } = user;
    return { id, username, phone, email, token };
  }
  async deleteUser(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    if (!user) throw new CustomError(userNotFound, 400);
    await user.destroy();
    return user;
  }
  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    if (!user) throw new CustomError(userNotFound, 400);
    return user;
  }
}
