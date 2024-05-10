import { IsNotEmpty } from 'class-validator';

export class SearchMovieDto {
  @IsNotEmpty()
  title: string;
}
