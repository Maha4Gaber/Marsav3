import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderTransComponent } from './header-trans/header-trans.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
   
    HeaderTransComponent,
    HomeComponent,LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class LayoutModule { }
