/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions,Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3000;
  // await app.listen(port);
  // Logger.log(
  //   `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  // );
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    }
  );
  await app.listen();
}

bootstrap();
