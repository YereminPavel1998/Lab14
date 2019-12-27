import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';
import { isNullOrUndefined, log } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @Output() addP = new EventEmitter<Object>();
  userForm: FormGroup;
  constructor() { }
  onAdd(name, surname){
    if ((name.value!='') && (surname.value!='')) {
      let man = {
        name_man: name.value,
        surname_man: surname.value
      }
      this.addP.emit(man);
      this.userForm.reset();
    }
    
  }
  
  ngOnInit() {
    this.userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-zА-Яа-яёЁ]/)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-zА-Яа-яёЁ]/)])
  });
  }
}

