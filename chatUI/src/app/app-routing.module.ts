import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthCommonComponentComponent } from './auth/auth-common-component/auth-common-component.component';

const routes: Routes = [
  {path:'auth', component:AuthCommonComponentComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
