import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  projectTitle: string;

  @IsString()
  creater: string;

  @IsString()
  projectSubtitle: string;

  @IsString()
  introduction: string;

  @IsString()
  qualifications: string;

  @IsString()
  preferentials: string;

  @IsString()
  devEnviroment: string;

  @IsString()
  stacks: string;

  @IsString()
  endAt: string;
}
