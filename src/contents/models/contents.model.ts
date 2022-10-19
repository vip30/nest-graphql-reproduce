import { Directive, Field, ID, InterfaceType } from '@nestjs/graphql';
import { Image } from './images.model';

@InterfaceType({ description: 'content' })
export class Content {
  @Field(type => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];

  @Field(type => [Image], {nullable: "itemsAndList"})
  images: Image[];
}

