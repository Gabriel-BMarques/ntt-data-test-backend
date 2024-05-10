import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { MovieDto } from '../dtos/movies.dto';
import { SearchMovieDto } from '../dtos/search-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('search')
  async search(@Query() searchMovieDto: SearchMovieDto): Promise<MovieDto> {
    return this.moviesService.searchMovie(searchMovieDto.title);
  }
}
