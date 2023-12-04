import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dto/createPost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly post: Repository<Post>,
    @InjectRepository(User) private readonly user: Repository<User>,
    private readonly userService: UserService,
  ) {}

  async createRecruit(token: string, postDto: CreatePostDto): Promise<object> {
    const { creater, projectTitle, projectSubtitle, introduction, qualifications, preferentials, stacks, devEnviroment, endAt } = postDto;

    const thisUser = await this.userService.validateAccess(token);

    const newPost = await this.post.save({
      projectTitle,
      projectSubtitle,
      writerId: thisUser.userId,
      creater,
      introduction,
      qualifications,
      preferentials,
      stacks,
      devEnviroment,
      endAt,
    });

    return newPost;
  }
}
