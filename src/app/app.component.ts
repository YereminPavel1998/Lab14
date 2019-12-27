import { Component, OnInit } from '@angular/core';
import { Person } from './shared/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainService } from './shared/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  searchString='';
  title = 'project';
  persons: Person[] = [];
  constructor(private mainService: MainService){
  }
  
  ngOnInit() {  
    this.doGet('/Persons'); 
  
  }
  
  async doGet(url){
    try {
      let res = await this.mainService.getData(url);
      if (typeof res !== 'undefined') {
        for (const man in res) {
          this.persons.push(new Person(res[man].id, res[man].name, res[man].surname));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async doPost(url, obj){
    try {
      await this.mainService.postData(url, obj);
    } catch (err) {
      console.log(err);
    }
    
  }
  async doPut(url, id, obj){
    try {
      this.mainService.putData(url, id,obj);
      }
    catch (err) {
      console.log(err);
    }
  }
  async doDelete(url, id){
    try {
      this.mainService.deleteData(url, id);
      }
    catch (err) {
      console.log(err);
    }
  }

  changePersons(person){
    this.searchString='';
    this.persons.splice(this.persons.findIndex(human => human.id == person.id), 1, person);
    this.doPut('/Persons', person.id, person); 
  
  }
  
  deletePersons(id){
    this.searchString='';
    this.persons.splice(this.persons.findIndex(human => human.id == id), 1);
    this.doDelete('/Persons', id); 
  }
  addPersons(obj){
    let newId;
    if (this.persons.length!=0){
      newId = +this.persons[this.persons.length-1].id +1;
     }
     else {newId=1;}
    this.searchString='';
    this.persons.push(new Person(newId, obj.name_man, obj.surname_man));
    this.doPost('/Persons', new Person(newId, obj.name_man, obj.surname_man)); 
  }
    }