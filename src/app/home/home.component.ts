import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Sudeera', 'Karunathilaka', true, 'w2', 'Spanish');
  constructor() { }

  ngOnInit() {
  }

  firstNameToUpperCase(value: string){
    if(value.length > 0){
      this.model.lastName=value.charAt(0).toUpperCase() + value.slice(1);
    }
    else{
      this.model.lastName = value;
    }
  }
}
