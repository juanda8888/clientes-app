import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientes'
})
export class ClientesPipe implements PipeTransform {

  transform(value: any[], query: string): unknown {
    if(query === '' || query === undefined) {
      return value;
    }
    return value.filter(user => user.nombre.toLowerCase().indexOf(query) != -1)
  }

}
