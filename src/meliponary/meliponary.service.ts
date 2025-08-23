import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MeliponaryService {
  constructor(private prisma: PrismaService) {}


  async findAll() {
    return this.prisma.meliponary.findMany();
  }

  async create(data: any) {
    // const userHaveMeliponary = await this.prisma.meliponary.findFirst({
    //   where: {
    //     userId: data.userId,
    //   },
    // });
    //
    //
    // if (userHaveMeliponary) {
    //   throw new ConflictException('O usuário já tem um empreendimento do tipo meliponário cadastrado!');
    // }

    return this.prisma.meliponary.create({ data });
  }

  async findAllByUserId(userId) {
    return this.prisma.meliponary.findMany({
      where: {
        userId: Number(userId),
      },
    });
  }


  async findById(id: number) {
    const meliponary = await this.prisma.meliponary.findUnique({
      where: { id },
    });

    if (!meliponary) {
      throw new NotFoundException('Meliponário não encontrado!');
    }
    return this.prisma.meliponary.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: Prisma.MeliponaryCreateInput) {
    return this.prisma.meliponary.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number) {
    const meliponary = await this.prisma.meliponary.findUnique({
      where: { id: Number(id) },
    });

    if (!meliponary) {
      throw new NotFoundException('Meliponário não encontrado!');
    }


    return this.prisma.meliponary.delete({ where: { id: Number(id) } });
  }
}
