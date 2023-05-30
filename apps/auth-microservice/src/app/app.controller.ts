import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }
}
