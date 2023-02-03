import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { Documentos } from '../documentos';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';
import { DocumentosService } from '../documentos.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado : Empleado = new Empleado();
  documentos:Documentos[];

  constructor(private empleadoServicio:EmpleadoService, private documentosServicio:DocumentosService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerDocumentos();
    console.log(this.empleado);
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error => console.log(error));
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    swal.fire('Empleado registrado',`El empleado ${this.empleado.nombre} ha sido registrado con exito`,`success`);
  }

  private obtenerDocumentos(){
    this.documentosServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
