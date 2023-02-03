import  swal  from 'sweetalert2';
import { DocumentosService } from './../documentos.service';
import { Documentos } from './../documentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  documentos:Documentos[];

  constructor(private documentoServicio:DocumentosService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerDocumentos();
  }

  actualizarDocumentos(id:number){
    this.router.navigate(['actualizar-documentos',id]);
  }

  private obtenerDocumentos(){
    this.documentoServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

    eliminarDocumento(id:number){
      swal.fire({
        title: '¿Estas seguro?',
        text: 'Confirma si deseas eliminar este documento',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if(result.value){
          this.documentoServicio.eliminarDocumento(id).subscribe(dato => {
            console.log(dato);
            this.obtenerDocumentos();
            swal.fire(
              'Documento eliminado',
              'El documento ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }
}