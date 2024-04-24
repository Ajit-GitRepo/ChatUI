import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCommonComponentComponent } from './auth-common-component/auth-common-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthCommonComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
})
export class AuthModule { }

