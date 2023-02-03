import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Documentos } from './documentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Listado de todos los empleados en el backend
  private baseUrl = "http://localhost:8080/api/v1/empleados";
  private baseUrl2 = "http://localhost:8080/api/v1/documentos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`)
  }

  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado)
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, empleado)
  }

  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`)
  }

  eliminarEmpleado(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  obtenerListaDeDocumentos(): Observable<Documentos[]> {
    return this.httpClient.get<Documentos[]>(`${this.baseUrl2}`)
  }
}
