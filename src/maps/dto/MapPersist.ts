import {IsNotEmpty} from "class-validator";

export class MapPersist {
    @IsNotEmpty({message: 'O campo Nome não pode ser vazio!'})
    content: string;
}
