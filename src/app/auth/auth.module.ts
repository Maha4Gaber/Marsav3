import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeSignComponent } from './code-sign/code-sign.component';
import { DoneComponent } from './done/done.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    OtpComponent,
    ResetPasswordComponent,
    CodeSignComponent,
    DoneComponent,
    NewpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  exports: [
    CodeSignComponent,
    SigninComponent,
    SignupComponent,

  ]
})
export class AuthModule { }
