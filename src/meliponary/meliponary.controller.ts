import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import {MeliponaryService} from './meliponary.service';
import {MeliponaryPersist} from "./dto/MeliponaryPersist";
import {User} from "../decorator/current-user-decorator";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('/api/v1/meliponary')
@UseGuards(JwtAuthGuard)
export class MeliponaryController {
    constructor(private meliponaryService: MeliponaryService) {}

    @Get()
    async find(@User() user: any) {
        return this.meliponaryService.findAllByUserId(user.id);
    }
    @Get('/all')
    async findAll() {
        return this.meliponaryService.findAll();
    }

    @Get("/:id")
    async findById(@User() user: any, @Param('id') id: number) {
        return this.meliponaryService.findById(id);
    }


    @Post()
    async handle(@User() user: any, @Body() data: MeliponaryPersist) {
        data.userId = user.id
        await this.meliponaryService.create(data);
    }

    @Delete("/:id")
    async delete(@User() user: any, @Param('id') id: number) {
        return this.meliponaryService.delete(id);
    }
}
