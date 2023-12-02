import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';
import { JwtService } from '@nestjs/jwt';
import { UserPayloadDto } from './dto/userPayload.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @InjectRepository(User) private user: Repository<User>,
    @InjectRepository(Major) private major: Repository<Major>,
    private jwt: JwtService,
  ) {}

  async signUp(signupDto: SignupDto): Promise<object> {
    const { major, skills, password, username } = signupDto;

    const thisUser = await this.user.findOneBy({ username });
    if (thisUser) throw new ConflictException('이미 존재하는 유저이름입니다');

    const hashPassword = await bcrypt.hash(password, 10);

    const skill = skills.join(',');

    const newUser = await this.user.save({
      username,
      password: hashPassword,
      skills: skill,
      major,
    });

    return newUser;
  }

  async login(loginDto: LoginDto): Promise<object> {
    const { userData, password } = loginDto;

    const thisUser = await this.user.findOneBy([{ username: userData }, { mail: userData }]);
    if (!thisUser) throw new NotFoundException('찾을 수 없는 유저');

    const isMatch = await bcrypt.compare(password, thisUser.password);
    if (!isMatch) throw new ForbiddenException('비밀번호 불일치');

    const payload = { userId: thisUser.userId };

    const accessToken = await this.generateAccess(payload);
    const refreshToken = await this.generateRefresh(payload);

    this.redis.set(`${thisUser.userId}accessToken`, accessToken);
    this.redis.set(`${thisUser.userId}refreshToken`, refreshToken);

    return { accessToken, refreshToken };
  }

  async logout(token: string) {
    const decoded = await this.validateAccess(token);

    await this.redis.del([`${decoded.userId}accessToken`, `${decoded.userId}refreshToken`]);
  }

  async updateUser(token: string, userDto: UpdateUserDto) {
    const { major, skills, tel, username } = userDto;
    const decoded = await this.validateRefresh(token);

    await this.user.update(
      { userId: decoded.userId },
      {
        username,
        major,
        skills: skills.join(','),
        tel,
      },
    );
  }

  async getUser(userId: number, token: string): Promise<object> {
    await this.validateRefresh(token);

    const thisUser = this.user.findOneBy({ userId });
    if (!thisUser) throw new NotFoundException('존재하지 않는 유저');

    return thisUser;
  }

  async deleteUser(token: string) {
    const decoded = await this.validateRefresh(token);

    await this.user.delete({ userId: decoded.userId });
  }

  //인증 & 토큰관리 함수들
  async generateAccess(userPayload: UserPayloadDto): Promise<string> {
    const accessToken = await this.jwt.sign(userPayload, {
      secret: process.env.SECRET,
    });

    return accessToken;
  }

  async generateRefresh(userPayload: UserPayloadDto) {
    const refreshToken = await this.jwt.sign(userPayload, {
      secret: process.env.SECRET,
    });

    return refreshToken;
  }
}
