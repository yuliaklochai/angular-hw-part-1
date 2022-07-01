import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UsersComponent } from './users.component';
import { UsersActionsComponent } from './users-actions/users-actions.component';

import { UserFilterPipe } from './services/user-filter.pipe';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [UsersComponent, UsersActionsComponent, UserFilterPipe, NewUserFormComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
