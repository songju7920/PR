import { IsArray, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsNumber()
  major: number;

  @IsArray()
  skills: string[];

  @IsString()
  tel: string;
}
