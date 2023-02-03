import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documentos } from './documentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  // Listado de todos los empleados en el backend
  private baseUrl = "http://localhost:8080/api/v1/documentos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeDocumentos(): Observable<Documentos[]> {
    return this.httpClient.get<Documentos[]>(`${this.baseUrl}`)
  }

  registrarDocumentos(documentos: Documentos): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, documentos)
  }

  actualizarDocumentos(id: number, documentos: Documentos): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, documentos)
  }

  obtenerDocumentoPorId(id: number): Observable<Documentos> {
    return this.httpClient.get<Documentos>(`${this.baseUrl}/${id}`)
  }

  eliminarDocumento(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}