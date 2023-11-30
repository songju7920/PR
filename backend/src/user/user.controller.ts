import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { loginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto) {
    const data = await this.userService.signUp(signupDto);

    return Object.assign({
      data,
      statusCode: 201,
      message: '유저 생성 성공',
    });
  }