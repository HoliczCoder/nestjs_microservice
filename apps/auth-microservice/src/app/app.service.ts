import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { UsersRepository } from './users.repository';
import { User } from '@nestjs-microservices/shared/entities';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
