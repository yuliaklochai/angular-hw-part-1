import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
})
export class UsersActionsComponent implements OnInit {
  @Output() remove = new EventEmitter<any>();
  @Output() selectedUsers = new EventEmitter<any>();
  @Output() search = new EventEmitter<string>();
  @Output() sortUser = new EventEmitter<string>();

  searchString: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectUsers() {
    this.selectedUsers.emit();
  }

  removeUsers() {
    this.remove.emit();
  }

  searchUsers() {
    this.search.emit(this.searchString);
  }

  sortUsers(e: string) {
    this.sortUser.emit(e);
  }
}
