import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login.component';
import { ButtonModule } from 'primeng/button';
import { LoginRoutingModule } from './login-routing.module';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    PasswordModule,
    InputTextModule
  ]
})
export class LoginModule { }
