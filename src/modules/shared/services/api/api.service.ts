import { Injectable } from '@nestjs/common';
import api from 'src/config/axios.config';
import { MovieDto } from 'src/modules/movies/dtos/movies.dto';

@Injectable()
export class ApiService {
  constructor() {}

  async searchMovie(title: string): Promise<MovieDto> {
    const response = await api.get('/', { params: { t: title } });

    return response.data;
  }
}
