import {Body, Controller, Get, Param, Post, UseGuards,} from '@nestjs/common';
import {MapsService} from './maps.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('/api/v1/maps')
@UseGuards(JwtAuthGuard)
export class MapsController {
    constructor(private mapsService: MapsService) {}
    @Get('/all')
    async findAll() {
        return this.mapsService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: number) {
        return this.mapsService.findOne(id);
    }
}
