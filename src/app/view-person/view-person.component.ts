import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../shared/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person: Person;
  @Output() changeP = new EventEmitter<Person>();
  @Output() deleteP = new EventEmitter<number>();
  editForm: FormGroup;
  constructor() {
  }
  flag=true;
  onEdit(id){
    if (!this.flag){
      let newPerson = new Person(id, this.editForm.value.name, this.editForm.value.surname);
      this.changeP.emit(newPerson);
    }
    this.flag=!this.flag;
  }
  onDelete(id){
    this.deleteP.emit(id);
  }
  ngOnInit() {
    this.editForm = new FormGroup({
        name: new FormControl(this.person.name, [Validators.required, Validators.pattern(/[A-Za-zА-Яа-яёЁ]/)]),
        surname: new FormControl(this.person.surname, [Validators.required, Validators.pattern(/[A-Za-zА-Яа-яёЁ]/)])
      });
  }
}
