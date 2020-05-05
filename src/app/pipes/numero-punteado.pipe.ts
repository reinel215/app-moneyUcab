import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroPunteado'
})
export class NumeroPunteadoPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    
    let moneda="B.s ";
    

    var string = new Intl.NumberFormat().format(value);
    moneda = moneda.concat(string);

    return moneda;
  }

}
