import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from './../cliente.model';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource([]);
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
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.dataSource.data = clientes);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('apply:', this.dataSource);
  }

}
