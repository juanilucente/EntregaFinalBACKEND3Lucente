import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MocksService } from './mocks.service';
import { PetsService } from '../pets/pets.service';
import { UsersService } from '../users/users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mocks')
@Controller('mocks')
export class MocksController {
  constructor(private mocks: MocksService, private usersService: UsersService, private petsService: PetsService){}

  @Get('mockingpets')
  async mockingPets(@Query('count') count = '10'){ return this.mocks.generatePets(Number(count)); }

  @Get('mockingusers')
  async mockingUsers(@Query('count') count = '50'){
    const users = await this.mocks.generateUsers(Number(count));
    return users.map(u => ({ ...u, _id: String(u._id) }));
  }

  @Post('generateData')
  async generateData(@Body() body: any){
    const usersNum = Number(body.users) || 0;
    const petsNum = Number(body.pets) || 0;
    const created = { users: 0, pets: 0 };
    if(usersNum > 0){
      const us = await this.mocks.generateUsers(usersNum);
      await this.usersService.insertMany(us);
      created.users = us.length;
    }
    if(petsNum > 0){
      const ps = this.mocks.generatePets(petsNum);
      await this.petsService.insertMany(ps);
      created.pets = ps.length;
    }
    return { ok: true, created };
  }
}