import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Documentos } from '../documentos';
import { DocumentosService } from '../documentos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-documento',
  templateUrl: './registrar-documento.component.html',
  styleUrls: ['./registrar-documento.component.css']
})
export class RegistrarDocumentoComponent {
  documentos : Documentos = new Documentos();

  constructor(private documentosService:DocumentosService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.documentos);
  }

  guardarDocumento() {
    this.documentosService.registrarDocumentos(this.documentos).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeDocumentos();
    }, error => console.log(error));
  }

  irALaListaDeDocumentos() {
    this.router.navigate(['/documentos']);
    swal.fire('Documento registrado',`El documento ${this.documentos.descripcion} ha sido registrado con exito`,`success`);
  }

  onSubmit() {
    this.guardarDocumento();
  }
}
