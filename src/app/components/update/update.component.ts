import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id : number;
  name : string;
  job : string = "EMPLOYEE";
  salary : number;

  updatedEmployee : Employee;
  success : boolean = true;

  constructor(private restService : RestService ) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    let e = new Employee(this.name,this.job);
    e.id = this.id;
    e.salary = this.salary;

    this.restService.updateEmployee(e)
      .subscribe( data => { this.updatedEmployee = data;
                            this.success = true; }
                , error => this.success=false
    )
  }

}
