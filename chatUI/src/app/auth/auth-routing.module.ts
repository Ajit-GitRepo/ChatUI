import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthCommonComponentComponent } from './auth-common-component/auth-common-component.component';

const routes: Routes = [
  { path: '', component: AuthCommonComponentComponent },
  // Other auth routes if needed
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
