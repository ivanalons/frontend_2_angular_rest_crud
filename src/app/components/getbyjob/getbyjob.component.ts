import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-getbyjob',
  templateUrl: './getbyjob.component.html',
  styleUrls: ['./getbyjob.component.css']
})
export class GetbyjobComponent implements OnInit {

  job : string;
  employeesList : Employee[];
  success : boolean = true;

  constructor(private restService : RestService) { }

  ngOnInit(): void {
  }

  getEmployeeById(){

    // alert(this.job);

    this.restService.getEmployeeByJob(this.job)
      .subscribe(data => {
        this.employeesList = data;
        this.success = true;
      },
       error => this.success = false
    );
  }

}
