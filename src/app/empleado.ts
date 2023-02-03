import { Documentos } from "./documentos";

export class Empleado {

    id:number;
    idTipodocumento:Documentos[];
    numerodocumento:number;
    razonsocial:string;
    nombre:string;
    apellido:string;
    fechanacimiento:Date;
    genero:string;
}
