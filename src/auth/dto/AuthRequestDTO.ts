import {IsNotEmpty} from "class-validator";

export class AuthRequestDTO {
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    email: string;
    @IsNotEmpty({message: 'O campo não pode ser vazio!'})
    password: string;
}
