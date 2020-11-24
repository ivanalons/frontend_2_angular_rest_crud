import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name : string;
  job : string = "EMPLOYEE";
  employee : Employee;
  success : boolean = true;

  constructor(private restService : RestService ) { }

  ngOnInit(): void {
  }

  createEmployee(){
    this.restService.createEmployee(new Employee(this.name,this.job))
      .subscribe( data => { this.employee = data;
                            this.success = true; }
    )
  }

}
