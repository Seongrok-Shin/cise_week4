import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type articleDocument = HydratedDocument<article>;

@Schema()
export class article {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  authors: string;

  @Prop()
  source: string;

  @Prop()
  pubyear: string;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop()
  evidence: string;
}

export const articleSchema = SchemaFactory.createForClass(article);
