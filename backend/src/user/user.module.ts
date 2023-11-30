import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Major, User]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '4h',
      },
      verifyOptions: {
        complete: false,
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
