import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {
  otp!: FormGroup
  constructor(private _AuthService:AuthService){}
  submit(){}
  changeReqister(value:string){
    this._AuthService.updateRegisterBehavoir(value)
  }
  get code() {
    return this.otp.get('code')!;
  }
}
