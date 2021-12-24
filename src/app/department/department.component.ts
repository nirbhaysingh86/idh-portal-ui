import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  departments: any;
  @Input() departmentdata: any;
  constructor() {
   
  }
  
  ngOnInit() {
    this.departments = this.departmentdata;
  }

}
