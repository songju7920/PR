import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

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

  @Patch('/end/:postId')
  async endRecruit(@Param('postId') postId: number, @Headers('Authorization') token: string) {
    await this.postService.endRecruit(token, postId);

    return Object.assign({
      statusCode: 200,
      message: '상태 변경 성공',
    });
  }

  @Patch('restart/:postId')
  async restartRecruit(@Param('postId') postId: number, @Headers('Authorization') token: string) {
    await this.postService.restartRecruit(token, postId);

    return Object.assign({
      statusCode: 200,
      message: '상태 변경 성공',
    });
  }

  @Delete('/:postId')
  async deleteRecruit(@Param('postId') postId: number, @Headers('Authorization') token: string) {
    await this.postService.deleteRecruit(token, postId);

    return Object.assign({
      statusCode: 204,
      message: '',
    });
  }

  @Patch('/:postId')
  async updateRecruit(@Param('postId') postId: number, @Headers('Authorization') token: string, @Body() updatePostDto: UpdatePostDto) {
    await this.postService.updateRecruit(token, postId, updatePostDto);

    return Object.assign({
      statusCode: 200,
      message: '게시물 업데이트',
    });
  }