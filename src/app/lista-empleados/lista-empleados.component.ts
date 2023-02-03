import  swal  from 'sweetalert2';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Documentos } from '../documentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentosService } from '../documentos.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];
  documentos:Documentos[];

  constructor(private empleadoServicio:EmpleadoService, private documentosServicio:DocumentosService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDocumentos();
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

    eliminarEmpleado(id:number){
      swal.fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar al cliente',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if(result.value){
          this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
            console.log(dato);
            this.obtenerEmpleados();
            swal.fire(
              'Cliente eliminado',
              'El cliente ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }

    private obtenerDocumentos(){
      this.documentosServicio.obtenerListaDeDocumentos().subscribe(dato => {
        this.documentos = dato;
      });
    }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }
}

