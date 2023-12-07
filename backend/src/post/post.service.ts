import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly post: Repository<Post>,
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

  async endRecruit(token: string, postId: number) {
    const thisUser = await this.userService.validateAccess(token);
    const thisPost = await this.post.findOneBy({ postId });

    if (!thisPost) throw new NotFoundException('찾을 수 없는 게시글');
    if (thisPost.writerId != thisUser.userId) throw new ForbiddenException('권한이 없는 유저');

    await this.post.update(postId, { isEnd: false });
  }

  async restartRecruit(token: string, postId: number) {
    const thisUser = await this.userService.validateAccess(token);
    const thisPost = await this.post.findOneBy({ postId });

    if (!thisPost) throw new NotFoundException('찾을 수 없는 게시물');
    if (thisUser.userId != thisPost.writerId) throw new ForbiddenException('권한없는 사용자');

    await this.post.update(postId, { isEnd: false });
  }

  async deleteRecruit(token: string, postId: number) {
    const thisUser = await this.userService.validateAccess(token);
    const thisPost = await this.post.findOneBy({ postId });

    if (!thisPost) throw new NotFoundException('게시물을 찾을 수 없습니다');
    if (thisUser.userId != thisPost.writerId) throw new ForbiddenException('권한이 없는 유저');

    await this.post.delete(postId);
  }