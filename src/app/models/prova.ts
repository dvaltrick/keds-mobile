import { Instituicao } from './instituicao';

export class Prova{
    id:string;
    ano:number;
    periodo:number;
    instituicaoId:string;
    instituicao:Instituicao;
}