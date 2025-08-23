import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class MeliponaryPersist {
    @IsNotEmpty({message: 'O campo Nome não pode ser vazio!'})
    name: string;
    @IsNotEmpty({message: 'O campo Latitude não pode ser vazio!'})
    latitude: string;
    @IsNotEmpty({message: 'longitude'})
    longitude: string;
    @IsNotEmpty({message: 'tipo instalacao'})
    tipoInstalacao: string
    @IsNotEmpty({message: 'especie abelha'})
    especieAbelha: string
    @IsNotEmpty({message: 'O campo Quantidade colméias não pode ser vazio!'})
    quantidadeColmeias: string
    @IsNotEmpty({message: 'O campo Outros apiários no raio de 1 KM não pode ser vazio!'})
    outrosMeliponariosRaio1km: boolean
    @IsOptional()
    qtdColmeiasOutrosMeliponarios: string
    @IsNotEmpty({message: 'O campo fonte nectar polen'})
    fontesNectarPolen: boolean
    @IsNotEmpty({message: 'disponibilidade agua'})
    disponibilidadeAgua: boolean
    @IsNotEmpty({message: 'sombreamento natural'})
    sombreamentoNatural: boolean
    @IsNotEmpty({message: 'protecao ventos fortes'})
    protecaoVentosFortes: boolean
    @IsNotEmpty({message: 'distancia segura contaminacao'})
    distanciaSeguraContaminacao: boolean
    @IsNotEmpty({message: 'O campo distanciaMinimaConstrucoes não pode ser vazio!'})
    distanciaMinimaConstrucoes: boolean
    @IsNotEmpty({message: 'O campo distanciaSeguraLavouras não pode ser vazio!'})
    distanciaSeguraLavouras: boolean
    @IsOptional()
    @IsString()
    capacidadeDeSuporte: string;
    userId: number
}
