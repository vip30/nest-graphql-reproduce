import { Injectable } from '@nestjs/common';

import { ArticlesArgs } from './dto/articles.args';
import { Article } from './models/articles.model';

@Injectable()
export class ArticlesService {
  async findOneById(id: string): Promise<Article> {
    return {} as any;
  }

  async findAll(articlesArgs: ArticlesArgs): Promise<Article[]> {
    return [] as Article[];
  }
}
