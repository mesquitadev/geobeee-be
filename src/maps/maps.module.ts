import {Module} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {MapsService} from "./maps.service";
import {MapsController} from "./maps.controller";

@Module({
    providers: [MapsService, PrismaService],
    controllers: [MapsController],
    exports: [MapsService]
})
export class MapsModule {
}
