import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/modules/shared/services/api/api.service';

@Injectable()
export class MoviesService {
  constructor(private readonly apiService: ApiService) {}

  async searchMovie(title: string) {
    return this.apiService.searchMovie(title);
  }
}
