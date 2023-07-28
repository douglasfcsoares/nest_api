import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  // async create({ email, name, password }: CreateUserDTO) {
  //   return this.prisma.users.create({
  //     data: {
  //       email,
  //       name,
  //       password,
  //     },
  //   });
  // }

  async create(data: CreateUserDTO) {
    return this.prisma.users.create({
      data,
    });
  }

  async list() {
    return this.prisma.users.findMany();
  }

  async show(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async update() {
    return this.prisma.users.update({});
  }
}
