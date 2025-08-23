import {Module} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {ApiaryService} from "./apiary.service";
import {ApiaryController} from "./apiary.controller";

@Module({
    providers: [ApiaryService, PrismaService],
    controllers: [ApiaryController],
    exports: [ApiaryService]
})
export class ApiaryModule {
}
