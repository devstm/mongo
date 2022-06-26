import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UsersService } from './users.service';

const body = {
  username: 'salehs12asddddddddssasddasassd',
  password: 'asddasd',
  phone: '12345dd6789789',
  email: 'sadddd@sa.com',
};

describe('userService', () => {
  let service: UsersService;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(() => body),
          },
        },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
    console.log(process.env.DB_TEST_DATABASE);
    app = module.createNestApplication();
    await app.init();
  });

  it('create new user with valid data', async () => {
    const result = await service.create(body);
    console.log(result);
    expect(result).toEqual(body);
  });

  // it('login with valid data', async () => {
  //   const result = await service.login({
  //     username: 'salehs12asddddddddssasddasassd',
  //     password: 'asddasd',
  //   });
  //   expect(result.hasOwnProperty('token')).toEqual(true);
  // });

  // it('login with incorrect password', async () => {
  //   jest
  //     .spyOn(service, 'login')
  //     .mockRejectedValue(new BadRequestException('Wrong password'));
  //   await expect(
  //     service.login({
  //       username: 'salehs12asssasddasassd',
  //       password: 'as11111111da1sd',
  //     }),
  //   ).rejects.toThrow(BadRequestException);
  // });
});
