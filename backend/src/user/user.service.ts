import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { loginDto } from './dto/login.dto';
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