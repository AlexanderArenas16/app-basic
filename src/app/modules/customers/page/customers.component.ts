import { Component, OnInit, inject } from '@angular/core';
import { CustomersService } from '../service/customers.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCustomerComponent } from '../components/dialog-customer/dialog-customer.component';
import { Store } from '@ngrx/store';
import { selectListCustomers } from '../store/customer.selectors';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/interfaces/customer';
import { AppState } from 'src/app/shared/general-state/app.state';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [DialogService]
})
export class CustomersComponent implements OnInit {

  private store               = inject(Store<AppState>);
  private customersService    = inject(CustomersService);
  private dialogService       = inject(DialogService);
  private confirmationService = inject(ConfirmationService);

  dialogRef!: DynamicDialogRef;
  customers$: Observable<any> = new Observable();

  cols: any;

  ngOnInit(): void {
    this.customersService.getCustomers();
    this.customers$ = this.store.select(selectListCustomers);

    this.cols = [
      { field: 'personalId', header: 'Cedula'},
      { field: 'name',       header: 'Nombre'},
      { field: 'cellphone',  header: 'Celular'},
      { field: 'email',      header: 'Email'},
      { field: '',           header: 'Acciones'},
    ]
  }

  showDialog(customer: any = null) {
    this.dialogRef = this.dialogService.open(DialogCustomerComponent,
      { 
        data: {
          customer
        },
        header: customer ? 'Editar Cliente' : 'Crear Cliente'
      }
    );

    this.dialogRef.onClose.subscribe((response) => {
      if(response){
        if (response.id === '') {
          this.customersService.createCustomer(customer);
        } else {
          this.customersService.updateCustomer({...customer, ...response});
        }
      }
    })
  }
  
  deleteCustomer(customer: Customer) {
    this.confirmationService.confirm({
      message: 'Esta seguro de eliminar el CLiente?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customersService.deleteCustomer(customer.id);
      },
      reject: () => { }
  });
  }
}
