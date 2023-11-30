import { IsArray, IsNumber, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  skills: string[];

  @IsNumber()
  major: number;
}
