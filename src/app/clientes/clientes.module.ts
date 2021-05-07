import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesPipe } from './clientes.pipe';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent,
    ClientesPipe,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent,
    UsersComponent
  ]
})
export class ClientesModule { }
