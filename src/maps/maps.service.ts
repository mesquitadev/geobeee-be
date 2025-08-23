import {ConflictException, Injectable} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MapsService {
  constructor(private prisma: PrismaService) {}
  async create(data: any): Promise<any> {
    // const userHaveApiary = await this.prisma.apiary.findFirst({
    //   where: {
    //     userId: data.userId,
    //   },
    // });
    //
    // if (userHaveApiary) {
    //   throw new ConflictException(
    //       'O empreendimento já está cadastrado no apiário!',
    //   );
    // }

    return this.prisma.geojson.create({ data });
  }

  async findAll() {
    return this.prisma.geojson.findMany()
  }

  async findOne(id: number) {
    return this.prisma.geojson.findFirst({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prisma.geojson.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.geojson.delete({ where: { id: Number(id) } });
  }
}
