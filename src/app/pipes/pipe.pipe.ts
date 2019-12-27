import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../shared/person.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'myFilter'
})
export class PipePipe implements PipeTransform {

  transform(persons: Person[], searchString: string): any {
    if (!isNullOrUndefined(persons) && (searchString.trim().length > 0)) {
      let newArr = persons.filter(person =>
        (person.name.toLowerCase().indexOf(searchString.toLowerCase())===0)
        ||(person.surname.toLowerCase().indexOf(searchString.toLowerCase())===0));
        return newArr;
    }
    else{
      return persons;
    }
  }
}
