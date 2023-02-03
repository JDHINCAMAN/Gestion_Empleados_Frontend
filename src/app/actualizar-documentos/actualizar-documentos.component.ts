import  swal  from 'sweetalert2';
import { DocumentosService } from './../documentos.service';
import { Documentos } from './../documentos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-documentos',
  templateUrl: './actualizar-documentos.component.html',
  styleUrls: ['./actualizar-documentos.component.css']
})
export class ActualizarDocumentosComponent implements OnInit {

  id:number;
  documento:Documentos = new Documentos();
  constructor(private documentoService:DocumentosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documentoService.obtenerDocumentoPorId(this.id).subscribe(dato =>{
      this.documento = dato;
    },error => console.log(error));
  }

  irAlaListaDeDocumentos(){
    this.router.navigate(['/documentos']);
    Swal.fire('Documento actualizado',`El documento ${this.documento.descripcion} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.documentoService.actualizarDocumentos(this.id,this.documento).subscribe(dato => {
      this.irAlaListaDeDocumentos();
    },error => console.log(error));
  }
}