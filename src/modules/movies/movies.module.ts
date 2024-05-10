import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { ApiService } from '../shared/services/api/api.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, ApiService],
})
export class MoviesModule {}
