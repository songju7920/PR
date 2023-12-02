import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

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

  @Post('/logout')
  async logout(@Headers('Authorization') token: string) {
    await this.userService.logout(token);

    return Object.assign({
      statusCode: 200,
      message: '로그아웃에 성공했습니다.',
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

  @Get('/profile/info/:userId')
  async getUser(@Param('userId') userId: number, @Headers('Authorization') token: string) {
    const data = await this.userService.getUser(userId, token);

    return Object.assign({
      data,
      statusCode: 200,
      message: '정보 조회 성공',
    });
  }

  @Delete('/')
  async deleteUser(@Headers('Authorization') token: string) {
    await this.userService.deleteUser(token);

    return Object.assign({
      statusCode: 204,
      message: '',
    });
  }
}
