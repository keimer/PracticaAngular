import { Pipe, PipeTransform } from "@angular/core";
//Pipe sirve para usar "|" como el signo para aplicar un pipe desde un componente 

@Pipe(
    {name: 'convertidorDolar'}
)
export class convertidorDolar implements PipeTransform{
    transform(factor:number, dolares:string):number{
        let cant_dolar = parseFloat(dolares);
        return factor * (isNaN(cant_dolar) ? 1: cant_dolar);
    }
}


@Pipe(
    {name: 'convertidorPesos'}
)
export class convertidorPesos implements PipeTransform{
    transform(factor:number, pesos:string):number{
        let cant_pesos = parseFloat(pesos);
        return (isNaN(cant_pesos) ? 655 : cant_pesos ) / factor;
    }
}