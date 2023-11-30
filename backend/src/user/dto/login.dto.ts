import { IsString } from 'class-validator';

export class loginDto {
  @IsString()
  userData: string;

  @IsString()
  password: string;
}
