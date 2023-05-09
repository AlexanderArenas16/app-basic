import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CustomersService {

  http = inject(HttpClient);

  constructor() { }

  getCustomers() {
    const url = `${environment.apiUrl}customer`;
    return this.http.get(url)
  }

  createCustomer(customer: any) {
    const url = `${environment.apiUrl}customer`;
    return this.http.post(url, customer);
  }
}
