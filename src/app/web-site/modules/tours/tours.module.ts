import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ToursRoutingModule } from './tours-routing.module';
import { LandingToursComponent } from './landing-tours/landing-tours.component';
import { ToursComponent } from './components/tours/tours.component';
import { SharedModule } from '../../../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { ToursDetailsComponent } from './components/tours-details/tours-details.component';
import { CheckAvailpiltyComponent } from './components/check-availpilty/check-availpilty.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    LandingToursComponent,
    ToursComponent,
    FilterComponent,
    ToursDetailsComponent,
    CheckAvailpiltyComponent,
    PaymentComponent,
    ConfirmPaymentComponent,
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    SharedModule,
    MatDialogModule,
    MatSliderModule,
  ],
  exports: [],
  providers: [DatePipe],
})
export class ToursModule {}
