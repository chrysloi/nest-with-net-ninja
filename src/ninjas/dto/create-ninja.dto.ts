import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  //   id: number;
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchucks'], { message: 'Please provide valid weapon' })
  weapon: 'stars' | 'nunchucks';
}
