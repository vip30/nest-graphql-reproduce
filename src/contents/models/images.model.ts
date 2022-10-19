import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => String)
  url: string;
}
