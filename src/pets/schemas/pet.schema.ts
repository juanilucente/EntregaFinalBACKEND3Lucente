import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) species: string;
  @Prop({ default: 1 }) age: number;
  @Prop({ default: Date.now }) createdAt: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet);