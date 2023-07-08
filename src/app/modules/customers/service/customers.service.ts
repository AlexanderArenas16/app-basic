import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { createCustomer, deleteCustomer, editCustomer, loadCustomers, loadedCustomers } from '../store/customer.actions';
import { Customer } from 'src/app/core/interfaces/customer';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CustomersService {

  http = inject(HttpClient);
  store = inject(Store<Customer>)

  constructor() { }

  getCustomers() {
    this.store.dispatch(loadCustomers());
    const url = `${environment.apiUrl}customer`;
    this.http.get<Customer[]>(url).subscribe({
      next: (customers) => {
        this.store.dispatch(loadedCustomers({ customers }));
      },
      error: (error) => { console.log(error) },
      complete: () => {}
    })
  }

  createCustomer(customer: Customer) {
    this.store.dispatch(loadCustomers());
    const url = `${environment.apiUrl}customer`;
    return this.http.post<Customer>(url, customer).subscribe({
      next: (resp) => {
        this.store.dispatch(createCustomer({ customer: resp }))
      },
      error: (error) => { console.log(error) },
      complete: () => {}
    });
  }

  updateCustomer(customer: Customer) {
    this.store.dispatch(loadCustomers());
    const url = `${environment.apiUrl}customer/${customer.id}`;
    return this.http.patch<Customer>(url, customer).subscribe({
      next: (resp) => {
        this.store.dispatch(editCustomer({ customer: resp }))
      },
      error: (error) => { console.log(error) },
      complete: () => {}
    });
  }

  deleteCustomer(id: string) {
    this.store.dispatch(loadCustomers());
    const url = `${environment.apiUrl}customer/${id}`;
    return this.http.delete<Customer>(url).subscribe({
      next: (resp) => {
        if (resp) this.store.dispatch(deleteCustomer({ id }))
      },
      error: (error) => { console.log(error) },
      complete: () => {}
    });
  }
}
