import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import {ApiaryService} from './apiary.service';
import {ApiaryPersist} from "./dto/ApiaryPersist";
import {User} from "../decorator/current-user-decorator";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('/api/v1/apiary')
@UseGuards(JwtAuthGuard)
export class ApiaryController {
    constructor(private apiaryService: ApiaryService) {}

    @Post()
    async create(@User() user: any, @Body() data: ApiaryPersist) {
        data.userId = user.id
        await this.apiaryService.create(data);
    }

    @Get()
    async find(@User() user: any) {
        return this.apiaryService.findAllByUserId(user.id);
    }

    @Get('/all')
    async findAll() {
        return this.apiaryService.findAll();
    }

    @Get("/:id")
    async findById(@User() user: any, @Param('id') id: number) {
        return this.apiaryService.findById(id);
    }

    @Delete("/:id")
    async delete(@User() user: any, @Param('id') id: number) {
        return this.apiaryService.delete(id);
    }
}
