import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.css'
})
export class InfoPopupComponent {

  details:any;

  constructor(public dialogRef: MatDialogRef<InfoPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private router:Router
   ){
    console.log("*******Hey! Im information provider********");
   }
   ngOnInit(): void {
    this.details = this.data;
    console.log(this.details, '******this is data********')}

    logOutUser(){
      this.dialogRef.close();
    }
}


