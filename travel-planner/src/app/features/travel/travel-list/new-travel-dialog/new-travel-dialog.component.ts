import { AppUser } from './../../../../access/auth/user';
import { AuthService } from './../../../../access/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-travel-dialog',
  templateUrl: './new-travel-dialog.component.html',
  styleUrls: ['./new-travel-dialog.component.scss']
})
export class NewTravelDialogComponent {

  public form: FormGroup;
  public nameControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(
    public dialogRef: MatDialogRef<NewTravelDialogComponent>,
    public formBuilder: FormBuilder,
    public auth: AuthService
  ) {
    this.form = this.formBuilder.group({
      nameControl: this.nameControl
    });
  }

  public onChange(): void {
    console.log(this.form)
  }

  public onConfirmClick(): void {
    this.auth.$loggedUser.subscribe((user: AppUser | undefined) => {
      if (user) {
        let travelModel: NewTravelModel = {
          name: this.form.get('nameControl')?.value,
          userUID: user.uid
        }
        this.dialogRef.close(travelModel);
      }
    });
  }
}

export interface NewTravelModel {
  name: string;
  userUID: string;
}