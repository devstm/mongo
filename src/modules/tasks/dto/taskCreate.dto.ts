import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TaskCreateDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
