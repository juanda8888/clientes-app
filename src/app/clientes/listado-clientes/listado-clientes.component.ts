import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from './../cliente.model';
import { Observable, Subscription } from 'rxjs';




@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

  clientes$: Observable<Cliente[]>;
  clientes: Cliente[];
  displayedColumns: string[] = ['cif', 'nombre', 'direccion', 'grupo'];
  clientesSubscription: Subscription;
  query = '';

  constructor(private clientesService: ClientesService) { }
  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }


}
