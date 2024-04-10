import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCommonComponentComponent } from './auth-common-component/auth-common-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthCommonComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
