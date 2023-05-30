import { Controller, ValidationPipe, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from '@nestjs-microservices/shared/dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}
