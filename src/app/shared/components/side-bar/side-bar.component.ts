import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      routerLink: '../dashboard'
    },
    {
      label: 'Configauración',
      routerLink: '../configuration'
    },
    {
      label: 'Clientes',
      routerLink: '../customers'
    }
  ]
}
