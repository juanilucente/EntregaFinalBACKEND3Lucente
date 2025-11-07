import { Controller, Get, Post, Body } from '@nestjs/common';
import { PetsService } from './pets.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService){}
  @Get()
  async list(){ return this.petsService.findAll(); }

  @Post()
  async create(@Body() body){ return this.petsService.create(body); }
}