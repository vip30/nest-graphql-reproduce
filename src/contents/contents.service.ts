import { Injectable } from '@nestjs/common';

import { Content } from './models/contents.model';

@Injectable()
export class ContentsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<Content> {
    return {} as any;
  }

  async findAll(): Promise<Content[]> {
    return [] as Content[];
  }
}
