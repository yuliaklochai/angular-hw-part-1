import { Pipe, PipeTransform } from '@angular/core';
import { User } from './api.service';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(users: User[], search: string = ''): User[] {
    if (!search.trim()) {
      return users;
    }
    return users.filter((users) => {
      return users.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ;
    });
  }
}
