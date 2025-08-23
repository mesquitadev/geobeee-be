import {IsNotEmpty  , IsOptional, IsString} from "class-validator";

export class ApiaryPersist {
    @IsNotEmpty({message: 'O campo Nome não pode ser vazio!'})
    name: string;
    @IsNotEmpty({message: 'O campo Latitude não pode ser vazio!'})
    latitude: number;
    @IsNotEmpty({message: 'O campo longitude não pode ser vazio!'})
    longitude: number;
    @IsNotEmpty({message: 'O campo Tipo instalação não pode ser vazio!'})
    tipoInstalacao: string;
    @IsOptional()
    @IsString()
    tempoItinerante: string;
    @IsNotEmpty({message: 'O campo Quantidade colméias não pode ser vazio!'})
    quantidadeColmeias: string;
    @IsNotEmpty({message: 'O campo Outros apiários no raio de 3 KM não pode ser vazio!'})
    outrosApiariosRaio3km: boolean;
    @IsOptional()
    @IsString()
    qtdColmeiasOutrosApiarios: string
    @IsNotEmpty({message: 'O campo fontesNectarPolen não pode ser vazio!'})
    fontesNectarPolen: boolean
    @IsNotEmpty({message: 'O campo disponibilidadeAgua não pode ser vazio!'})
    disponibilidadeAgua: boolean
    @IsNotEmpty({message: 'O campo sombreamentoNatural não pode ser vazio!'})
    sombreamentoNatural: boolean
    @IsNotEmpty({message: 'O campo protecaoVentosFortes não pode ser vazio!'})
    protecaoVentosFortes: boolean
    @IsNotEmpty({message: 'O campo distanciaSeguraContaminacao não pode ser vazio!'})
    distanciaSeguraContaminacao: boolean
    @IsNotEmpty({message: 'O campo distanciaMinimaConstrucoes não pode ser vazio!'})
    distanciaMinimaConstrucoes: boolean
    @IsNotEmpty({message: 'O campo distanciaSeguraLavouras não pode ser vazio!'})
    distanciaSeguraLavouras: boolean
    @IsNotEmpty({message: 'O campo acessoVeiculos não pode ser vazio!'})
    acessoVeiculos: boolean;
    @IsOptional()
    @IsString()
    capacidadeDeSuporte: string;
    userId: number
}
