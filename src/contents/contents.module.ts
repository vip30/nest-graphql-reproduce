import { Module } from '@nestjs/common';

import { ContentsResolver } from './contents.resolver';
import { ContentsService } from './contents.service';

@Module({
  providers: [ContentsResolver, ContentsService],
})
export class ContentsModule {}
