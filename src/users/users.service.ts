import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: any){
    const hash = await bcrypt.hash(data.password, 10);
    const created = new this.userModel({ ...data, password: hash });
    return created.save();
  }

  async findAll(){
    return this.userModel.find().lean();
  }

  async findByEmail(email: string){
    return this.userModel.findOne({ email }).lean();
  }

  async insertMany(arr: any[]){
    return this.userModel.insertMany(arr);
  }

  async findById(id: string){
    return this.userModel.findById(id).lean();
  }
}