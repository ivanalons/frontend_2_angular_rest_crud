import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  employeesList: Employee[];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
   
  }

  listAllEmployees(){
    this.restService.getAllEmployees()
    .subscribe(data => {
      this.employeesList = data;
    });
  }

}
