import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../model/employee.model";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8181/api/employees/';

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id:number) : Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl+id);
  }

  getEmployeeByJob(job:string) : Observable<Employee[]> {
    // alert(this.baseUrl+"job/"+job);
    return this.http.get<Employee[]>(this.baseUrl+"job/"+job);
  }

  createEmployee(employee:Employee) : Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl,employee);
  }

  updateEmployee(employee:Employee) : Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl+employee.id,employee);
  }

  deleteEmployee(id:number) : Observable<void> {
    return this.http.delete<void>(this.baseUrl+id);
  }
}
