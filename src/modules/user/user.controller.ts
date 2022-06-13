import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FindOneOptions } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getOne(@Param('id', ParseIntPipe) id: FindOneOptions<User>) {
    const user = this.userService.getOne(id);
    if (user) {
      return user;
    } else {
      throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }
}
