import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Listado de todos los empleados en el backend
  private baseUrl = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeEmpleados():Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`)
  }

  registrarEmpleado(empleado:Empleado) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado)
  }

}
