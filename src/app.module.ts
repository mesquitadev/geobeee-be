import {Module} from '@nestjs/common';
import {PrismaService} from './prisma/prisma.service';
import {AuthModule} from './auth/auth.module';
import {ApiaryModule} from './apiary/apiary.module';
import {MeliponaryModule} from './meliponary/meliponary.module';
import {UsersModule} from "./users/users.module";
import {MapsModule} from "./maps/maps.module";

@Module({
    imports: [
        ApiaryModule,
        MeliponaryModule,
        AuthModule,
        UsersModule,
        MapsModule
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {
}
