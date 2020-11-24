import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id : number;
  success : boolean;

  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }

  deleteById(){
      this.restService.deleteEmployee(this.id).subscribe(
        data => this.success=true,
        error => this.success=false
      )
  }
}
