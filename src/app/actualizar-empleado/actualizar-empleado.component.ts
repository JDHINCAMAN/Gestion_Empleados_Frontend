import  swal  from 'sweetalert2';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Documentos } from '../documentos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DocumentosService } from '../documentos.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  documentos:Documentos[];
  constructor(private empleadoService:EmpleadoService,private router:Router,private documentosServicio:DocumentosService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDocumentos();
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    Swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  private obtenerDocumentos(){
    this.documentosServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

  onSubmit(){
    this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}