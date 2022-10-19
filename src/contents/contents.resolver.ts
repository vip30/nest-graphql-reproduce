import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Content } from './models/contents.model';
import { ContentsService } from './contents.service';


@Resolver(of => Content)
export class ContentsResolver {
  constructor(private readonly contentsService: ContentsService) {}

  @Query(returns => Content)
  async content(@Args('id') id: string): Promise<Content> {
    const content = await this.contentsService.findOneById(id);
    if (!content) {
      throw new NotFoundException(id);
    }
    return content;
  }

  @Query(returns => [Content])
  contents(): Promise<Content[]> {
    return this.contentsService.findAll();
  }

}