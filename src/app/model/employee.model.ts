import { identifierModuleUrl } from "@angular/compiler"
import { stringify } from 'querystring';

export class Employee {

    id: number;
    name: string;
    job: string;
    salary: number;
    
    constructor(name:string, job:string){
        this.name=name;
        this.job=job;
    }

}