import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../services/api.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  newUserForm: FormGroup;
  newUser: User;
  submitted: boolean = false;
  @Output() user = new EventEmitter<User>();
  @Input() usersList: User[];

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.minLength(3), Validators.required]),
      lastName: new FormControl('', [Validators.minLength(3), Validators.maxLength(60), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern('^[0-9]+$'), Validators.required]),
    })
  }

  createUser() {
    this.newUser = {
      id: this.usersList.length + 1,
      name: `${this.newUserForm.value.firstName} ${this.newUserForm.value.lastName}`,
      email: `${this.newUserForm.value.email}`,
      phone: `${this.newUserForm.value.phone}`,
      checked: false
    }
    
  }

  sendUser() {
    this.submitted = true;
    if(this.newUserForm.invalid) {
      return
    }
    this.createUser();
    this.user.emit(this.newUser);

    this.submitted = false;
    this.newUserForm.reset()
  }

}
