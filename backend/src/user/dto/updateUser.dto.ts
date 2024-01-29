import { IsArray, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsNumber()
  majorId: number;

  @IsArray()
  skills: string[];

  @IsString()
  tel: string;
}
