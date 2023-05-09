import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.scss']
})
export class DialogCustomerComponent {

  // public dialogRef = inject(DynamicDialogRef);

  constructor(public dialogRef: DynamicDialogRef) {}

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    personalId: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
  })

  sendCustomer() {
    this.dialogRef.close(this.form.value);
  }

}
