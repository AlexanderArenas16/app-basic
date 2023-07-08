import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.scss']
})
export class DialogCustomerComponent implements OnInit {

  public dialogRef = inject(DynamicDialogRef);
  dialogConfig     = inject(DynamicDialogConfig);

  constructor() {}

  form = new FormGroup({
    id: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    personalId: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
  })

  ngOnInit(): void {
    if(this.dialogConfig.data) {
      this.form.patchValue(this.dialogConfig.data.customer);
    }
  }

  sendCustomer() {
    this.dialogRef.close(this.form.value);
  }

}
