import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelMenuModule } from 'primeng/panelmenu';

const COMPONENTS = [
  NavBarComponent,
  SideBarComponent,
  FooterComponent
]

const PRIME_MODULES = [
  PanelMenuModule
]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    PRIME_MODULES
  ],
  exports: [ COMPONENTS ]
})
export class SharedModule { }
