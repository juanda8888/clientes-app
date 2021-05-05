import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente, Grupo } from './cliente.model';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes$ = new Subject<Cliente[]>();
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      }
    ];

    this.clientes = [];
   }

   getGrupos(): Grupo[] {
     return this.grupos;
   }

   getClientes(): Cliente[] {
     return this.clientes;
   }

   getClientes$(): Observable<Cliente[]> {
     return this.clientes$.asObservable();
   }

   agregarCliente(cliente: Cliente): void {
     this.clientes.push(cliente);
     this.clientes$.next(this.clientes);
   };

   nuevoCliente(): Cliente {
      return {
        id: this.clientes.length,
        nombre: '',
        cif: '',
        direccion: '',
        grupo: 0
      };
   }
}
