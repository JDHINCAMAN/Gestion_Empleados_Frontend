import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ActualizarDocumentosComponent } from './actualizar-documentos/actualizar-documentos.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarDocumentoComponent } from './registrar-documento/registrar-documento.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'documentos', component: ListaDocumentosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'registrar-documento', component: RegistrarDocumentoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'actualizar-documentos/:id', component: ActualizarDocumentosComponent },
  { path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
