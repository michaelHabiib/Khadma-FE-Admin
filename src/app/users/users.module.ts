import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { UsersDashboardComponent } from './Components/users-dashboard/users-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from '../shared/Components/date-input/date-input.component';
import { DescrptionInputComponent } from '../shared/Components/descrption-input/descrption-input.component';
import { EmailInputComponent } from '../shared/Components/email-input/email-input.component';
import { NumberInputComponent } from '../shared/Components/number-input/number-input.component';
import { SelectInputComponent } from '../shared/Components/select-input/select-input.component';
import { SubmitButtonComponent } from '../shared/Components/submit-button/submit-button.component';
import { TableComponent } from '../shared/Components/table/table.component';
import { TextInputComponent } from '../shared/Components/text-input/text-input.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from '../shared/Components/header/header.component';
import { UsersService } from '../core/Services/users.service';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: UsersDashboardComponent,
    children: [
      {path : 'data', component : UsersComponent}
    ],
  },

];

@NgModule({
  declarations: [
    UsersComponent,
    UsersDashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    TableComponent,
    HeaderComponent,
    SharedModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NumberInputComponent,
    TextInputComponent,
    SubmitButtonComponent,
    EmailInputComponent,
    DescrptionInputComponent,
    DateInputComponent,
    SelectInputComponent,
    HttpClientModule
  ],
})
export class UsersModule { }
