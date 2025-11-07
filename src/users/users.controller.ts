import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() body: CreateUserDto){
    const user = await this.usersService.create(body);
    const { password, ...rest } = user.toObject ? user.toObject() : user;
    return rest;
  }

  @Get()
  @ApiOperation({ summary: 'List users' })
  async list(){
    const users = await this.usersService.findAll();
    return users.map(u => {
      const { password, ...rest } = u;
      return rest;
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  async get(@Param('id') id: string){
    const user = await this.usersService.findById(id);
    if(!user) return { error: 'Not found' };
    const { password, ...rest } = user as any;
    return rest;
  }
}