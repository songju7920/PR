import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { configDotenv } from 'dotenv';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

configDotenv()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: process.env.DB_HOST,
      username: process.env.USERNAME,
      password: process.env.PW,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [__dirname + '/../**/entities/*.js'],
      timezone: 'Asia/Seoul',
    }),
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PW,
      },
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule {}
