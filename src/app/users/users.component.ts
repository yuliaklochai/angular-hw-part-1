import { Component, OnInit } from '@angular/core';
import { User, UsersServiceService } from './services/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  searchString: string = ''

  constructor(public usersService: UsersServiceService) {}

  ngOnInit(): void {
    this.usersList = this.usersService.usersList;
  }
  checkUser(id: number) {
    const index = this.usersList.findIndex((user) => user.id === id);
    this.usersList[index].checked = !this.usersList[index].checked;
  }

  selectUsers() {
    this.usersList.forEach((user) => {
      user.checked = true;
    });
  }

  removeUsers() {
    this.usersList = this.usersList.filter((user) => user.checked === false);
  }

  searchUser(searchData: string) {
    this.searchString = searchData;
  }

  sortUsers(value: string) {
    if (+value === 1) {
      this.usersList = this.usersList.sort((a: User,b: User) => a.firstname > b.firstname ? 1 : -1)
    } else if (+value === -1) {
      this.usersList = this.usersList.sort((a: User,b: User) => a.firstname < b.firstname ? 1 : -1)
    }
  }
}
