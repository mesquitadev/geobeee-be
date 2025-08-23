import {IsNotEmpty} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class LoginUserDto {
    @IsNotEmpty() readonly email: string;
    @IsNotEmpty() readonly password: string;
}

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    fullName: string;

    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    cpf: string

    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    email: string;

    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    phone: string

    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    password: string;

    @ApiProperty()
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    role: string;
}

export class UpdatePasswordDto {
    @IsNotEmpty()
    @ApiProperty()
    new_password: string;
    @IsNotEmpty()
    @ApiProperty()
    old_password: string;
}
