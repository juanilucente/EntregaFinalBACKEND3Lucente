import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Adoption, AdoptionDocument } from './schemas/adoption.schema';
import { Model } from 'mongoose';

@Injectable()
export class AdoptionService {
  constructor(@InjectModel(Adoption.name) private adoptionModel: Model<AdoptionDocument>){}

  async create(data:any){ return new this.adoptionModel(data).save(); }
  async findAll(){ return this.adoptionModel.find().lean(); }
  async findById(id:string){ return this.adoptionModel.findById(id).lean(); }
  async update(id:string, update:any){ return this.adoptionModel.findByIdAndUpdate(id, update, { new: true }).lean(); }
  async delete(id:string){ return this.adoptionModel.findByIdAndDelete(id); }
}