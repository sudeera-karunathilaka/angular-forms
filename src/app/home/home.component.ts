import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasPrimaryLanguageError=false;
  
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Sudeera', 'Karunathilaka', true, 'w2', 'default');
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

  validatePrimaryLanguage(event){
    if(this.model.primaryLanguage === 'default'){
      this.hasPrimaryLanguageError = true;
    }
    else{
      this.hasPrimaryLanguageError = false;
    }
    console.log(this.hasPrimaryLanguageError);
  }
}
