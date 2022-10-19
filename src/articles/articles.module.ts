import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { ArticlesResolver } from './articles.resolver';
import { ArticlesService } from './articles.service';

@Module({
  providers: [ArticlesResolver, ArticlesService, DateScalar],
})
export class ArticlesModule {}
