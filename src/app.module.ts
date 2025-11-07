import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AdoptionModule } from './adoption/adoption.module';
import { PetsModule } from './pets/pets.module';
import { MocksModule } from './mocks/mocks.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/entrega_final'),
    UsersModule,
    AdoptionModule,
    PetsModule,
    MocksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}