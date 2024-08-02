import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {User} from '@prisma/client'
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto, LoginUserDto} from "../users/dto/UserDTO";
import {JwtPayload} from "./jwt.strategy";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}

    async register(userDto: CreateUserDto):
        Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: "ACCOUNT_CREATE_SUCCESS",
        };

        try {
            status.data = await this.usersService.create(userDto);
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }
        return status;
    }

    async login(loginUserDto: LoginUserDto): Promise<any> {
        // find user in db
        const user = await
            this.usersService.findByLogin(loginUserDto);

        // generate and sign token
        const token = this._createToken(user);

        return {
            ...token,
            data: user
        };
    }

    async logout () {

    }

    private _createToken({ email }): any {
        const user: JwtPayload = { email };
        const token = this.jwtService.sign(user);
        return {
            expiresIn: process.env.EXPIRESIN,
            token,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new HttpException("INVALID_TOKEN",
                HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}

export interface RegistrationStatus{
    success: boolean;
    message: string;
    data?: User;
}
export interface RegistrationSeederStatus {
    success: boolean;
    message: string;
    data?: User[];
}
