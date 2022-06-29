import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersActionsComponent } from './users-actions/users-actions.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserFilterPipe } from './services/user-filter.pipe'

@NgModule({
  declarations: [
    UsersComponent,
    UsersActionsComponent,
    UserFilterPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    UsersComponent,
    
  ]
})
export class UsersModule { }
