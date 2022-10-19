import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Content } from 'src/contents/models/contents.model';

@ObjectType({ description: 'recipe ', implements: [Content], })
export class Recipe extends Content {
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
}

