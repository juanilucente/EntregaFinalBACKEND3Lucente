import { Module } from '@nestjs/common';
import { MocksController } from './mocks.controller';
import { MocksService } from './mocks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schemas/user.schema';
import { Pet, PetSchema } from '../pets/schemas/pet.schema';
import { PetsModule } from '../pets/pets.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Pet.name, schema: PetSchema }]),
    PetsModule,
    UsersModule
  ],
  controllers: [MocksController],
  providers: [MocksService]
})
export class MocksModule {}