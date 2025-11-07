import { Module } from '@nestjs/common';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Adoption, AdoptionSchema } from './schemas/adoption.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Adoption.name, schema: AdoptionSchema }])],
  controllers: [AdoptionController],
  providers: [AdoptionService]
})
export class AdoptionModule {}