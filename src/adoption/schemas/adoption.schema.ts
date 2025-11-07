import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdoptionDocument = Adoption & Document;

@Schema()
export class Adoption {
  @Prop({ required: true }) petId: string;
  @Prop({ required: true }) userId: string;
  @Prop({ default: Date.now }) requestedAt: Date;
  @Prop({ default: 'pending' }) status: string;
}

export const AdoptionSchema = SchemaFactory.createForClass(Adoption);