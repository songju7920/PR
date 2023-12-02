import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
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

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.userService.login(loginDto);

    return Object.assign({
      data,
      statusCode: 200,
      message: '로그인 성공',
    });
  }


  @Patch('/profile/update')
  async updateUser(@Headers('Authorization') token: string, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.updateUser(token, updateUserDto);

    return Object.assign({
      statusCode: 200,
      message: '프로필 수정 성공',
    });
  }
}
