import { Injectable } from '@nestjs/common';
import api from 'src/config/axios.config';

@Injectable()
export class ApiService {
  constructor() {}

  async searchMovie(title: string) {
    const response = await api.get('/', { params: { t: title } });

    return response.data;
  }
}
