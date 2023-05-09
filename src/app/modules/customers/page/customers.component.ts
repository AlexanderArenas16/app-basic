import { Component, OnInit, inject } from '@angular/core';
import { CustomersService } from '../service/customers.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCustomerComponent } from '../components/dialog-customer/dialog-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [DialogService]
})
export class CustomersComponent implements OnInit {

  customersService  = inject(CustomersService);
  dialogService     = inject(DialogService);
  dialogRef!: DynamicDialogRef;
  customers: any;

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (error) => { console.log(error) },
      complete: () => {}
    })
  }

  showDialog(customer: any = null) {
    this.dialogRef = this.dialogService.open(DialogCustomerComponent,
      { 
        data: {
          customer
        },
        header: 'Crear Cliente'
      }
    );

    this.dialogRef.onClose.subscribe((customer) => {
      if (customer) {
        this.customersService.createCustomer(customer).subscribe(console.log)
      }
    })
  }
}
