import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Adoption')
@Controller('adoption')
export class AdoptionController {
  constructor(private svc: AdoptionService){}

  @Get()
  async list(){ return this.svc.findAll(); }

  @Get(':id')
  async get(@Param('id') id:string){ return this.svc.findById(id); }

  @Post()
  async create(@Body() body:any){ return this.svc.create(body); }

  @Put(':id')
  async update(@Param('id') id:string, @Body() body:any){ return this.svc.update(id, body); }

  @Delete(':id')
  async delete(@Param('id') id:string){ await this.svc.delete(id); return { ok: true }; }
}