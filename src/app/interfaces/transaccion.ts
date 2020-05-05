export interface Transaccion {
    fecha : Date;
    cuenta : string;
    cantidad : number;
    modalidad : string; //monedero o billetera
    descripcion : string;
    numReferencia : number;
    isPay: boolean;
}
