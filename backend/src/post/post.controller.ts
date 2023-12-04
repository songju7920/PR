import { Body, Controller, Headers, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/createPost')
  async createRecruit(@Headers('Authorization') token: string, @Body() createPostDto: CreatePostDto) {
    const data = await this.postService.createRecruit(token, createPostDto);

    return Object.assign({
      data,
      statusCode: 201,
      message: '게시글 생성에 성공했습니다',
    });
  }

}