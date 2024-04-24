import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    InfoPopupComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
    
  ]
})
export class PopUpModule { }
