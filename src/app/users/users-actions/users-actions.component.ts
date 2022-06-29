import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface sortOption {
  name: string,
  value: number
}

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss']
})
export class UsersActionsComponent implements OnInit {
  @Output() remove = new EventEmitter<any>();
  @Output() selectedUsers = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();
  @Output() sortUser = new EventEmitter<any>();

  searchString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectUsers() {
    this.selectedUsers.emit()
  }

  removeUser() {
    this.remove.emit();
  }

  searchUser() {
    this.search.emit(this.searchString);
  }

  sortUsers(e: any) {
    this.sortUser.emit(e);
  }
}
