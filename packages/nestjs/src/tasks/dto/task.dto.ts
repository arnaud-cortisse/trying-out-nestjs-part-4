import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    description: 'The ID of the task',
    default: 'This is a fake ID',
  })
  id: number;

  @ApiProperty({
    description: 'The title of the task',
    minLength: 3,
    maxLength: 30,
    default: 'This is a fake title',
  })
  title: string;
  @ApiProperty({
    description: 'The description of the task',
    minLength: 0,
    maxLength: 200,
    default: 'This is a fake description',
  })
  description: string;
}
