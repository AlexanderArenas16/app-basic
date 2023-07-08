import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './page/customers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CustomersService } from './service/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogCustomerComponent } from './components/dialog-customer/dialog-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    CustomersComponent,
    DialogCustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    ConfirmDialogModule
  ],
  providers: [CustomersService, ConfirmationService]
})
export class CustomersModule { }
