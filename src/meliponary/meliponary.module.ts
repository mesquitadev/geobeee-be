import { Module } from '@nestjs/common';
import {MeliponaryController} from "./meliponary.controller";
import {MeliponaryService} from "./meliponary.service";
import {PrismaService} from "../prisma/prisma.service";

@Module({
    providers: [MeliponaryService, PrismaService],
    controllers: [MeliponaryController],
    exports: [MeliponaryService]
})
export class MeliponaryModule {}
