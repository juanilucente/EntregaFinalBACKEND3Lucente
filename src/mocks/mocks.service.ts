import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';

function randInt(min:number,max:number){ return Math.floor(Math.random()*(max-min+1))+min; }
function sample(arr:any[]){ return arr[Math.floor(Math.random()*arr.length)]; }

@Injectable()
export class MocksService {
  async generateUsers(count = 50){
    const users = [];
    const first = ['Juan','Ana','Luis','María','Carlos','Lucía','Pedro','Sofía'];
    const last = ['González','Rodríguez','Pérez','Gómez','Fernández','López'];
    for(let i=0;i<count;i++){
      const fn = first[i % first.length] + (i+1);
      const ln = last[i % last.length];
      const email = `${fn.toLowerCase()}.${ln.toLowerCase()}${i+1}@example.com`;
      const password = await bcrypt.hash('coder123', 10);
      const role = Math.random() < 0.85 ? 'user' : 'admin';
      users.push({
        _id: Types.ObjectId(),
        firstName: fn,
        lastName: ln,
        email,
        password,
        role,
        pets: [],
        createdAt: new Date()
      });
    }
    return users;
  }

  generatePets(count = 10){
    const names = ['Rocky','Luna','Max','Bella','Nala','Coco'];
    const species = ['dog','cat','bird'];
    const pets = [];
    for(let i=0;i<count;i++){
      pets.push({
        _id: Types.ObjectId(),
        name: `${names[i%names.length]}${i+1}`,
        species: sample(species),
        age: randInt(1,12),
        createdAt: new Date()
      });
    }
    return pets;
  }
}