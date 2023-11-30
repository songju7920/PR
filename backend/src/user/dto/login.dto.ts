import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  userData: string;

  @IsString()
  password: string;
}
