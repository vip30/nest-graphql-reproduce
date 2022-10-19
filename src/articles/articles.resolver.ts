import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';

import { Image } from 'src/contents/models/images.model';
import { ArticlesArgs } from './dto/articles.args';
import { Article } from './models/articles.model';
import { ArticlesService } from './articles.service';

@Resolver(of => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(returns => Article)
  async article(@Args('id') id: string): Promise<Article> {
    const recipe = await this.articlesService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Article])
  articles(@Args() articlesArgs: ArticlesArgs): Promise<Article[]> {
    return this.articlesService.findAll(articlesArgs);
  }

  @ResolveField(() => [Image], { nullable: 'itemsAndList' })
  images(
    @Parent() { images }: Article,
    @Args({ nullable: true }) args: ArticlesArgs,
  ) {
    return [];
  }
}
