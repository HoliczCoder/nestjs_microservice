import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { MakePaymentDto } from '@nestjs-microservices/shared/dto';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('process_payment')
  handleProcessPayment ( @Payload(ValidationPipe)  data : MakePaymentDto ){
    this.appService.processPayment(data)
  }
}
