import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, ApiService } from './services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  usersList: User[] = [];
  searchString: string = '';
  subscription: Subscription[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    const fetchUsersSubs = this.apiService.fetchUsers().subscribe(() => {
      this.usersList = this.apiService.usersList;
      this.usersList.forEach((user) => {
        user.checked = false;
      });
    });
    this.subscription.push(fetchUsersSubs);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subs) => subs.unsubscribe());
  }

  checkUsers(id: number) {
    const index = this.usersList.findIndex((user) => user.id === id);
    this.usersList[index].checked = !this.usersList[index].checked;
  }

  selectUsers() {
    this.usersList.forEach((user) => {
      user.checked = true;
    });
  }

  removeUsers() {
    const idList: number[] = [];
    this.usersList.forEach((user) => {
      if (user.checked === true) {
        idList.push(user.id);
      }
    });

    if (!idList.length) return;

    idList.forEach((id) => {
      const deleteUsersSubs = this.apiService.deleteUsers(id).subscribe();
      this.subscription.push(deleteUsersSubs);
    });
    this.usersList = this.usersList.filter((user) => user.checked === false);
  }

  searchUsers(searchData: string) {
    this.searchString = searchData;
  }

  sortUsers(value: string) {
    if (+value === 1) {
      this.usersList = this.usersList.sort((a: User, b: User) =>
        a.name > b.name ? 1 : -1
      );
    } else if (+value === -1) {
      this.usersList = this.usersList.sort((a: User, b: User) =>
        a.name < b.name ? 1 : -1
      );
    }
  }

  addUser(user: User) {
    const newUser = JSON.stringify(user);
    const postUsersSubs = this.apiService
      .postUsers(newUser)
      .subscribe((user) => this.usersList.push(user));
    this.subscription.push(postUsersSubs);
  }
}
