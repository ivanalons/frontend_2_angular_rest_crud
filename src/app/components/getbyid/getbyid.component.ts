import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {

  id : number;
  employee : Employee;
  success : boolean = true;

  constructor(private restService : RestService) { }

  ngOnInit(): void {
  }

  getEmployeeById(){
    this.restService.getEmployeeById(this.id)
      .subscribe(data => {
        this.employee = data;
        this.success = true;
      },
       error => this.success = false
    );

    // alert(JSON.stringify(this.employee));

  }

}
