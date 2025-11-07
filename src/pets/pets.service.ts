import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetDocument } from './schemas/pet.schema';
import { Model } from 'mongoose';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>){}

  async create(data:any){ return new this.petModel(data).save(); }
  async findAll(){ return this.petModel.find().lean(); }
  async insertMany(arr:any[]){ return this.petModel.insertMany(arr); }
}