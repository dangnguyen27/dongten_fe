import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowQrComponent } from './show-qr/show-qr.component';
import { QueryComponent } from './query/query.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { NumberToTextPipe } from 'src/app/pipes/numberToText.pipe';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BlockUIModule } from 'ng-block-ui';
import { PaymentErrorComponent } from './payment-error/payment-error.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: 'query',
    component: QueryComponent
  },
  {
    path: 'show-qr',
    component: ShowQrComponent
  },
  {
    path: 'success',
    component: PaymentSuccessComponent
  },
  {
    path: 'fail',
    component: PaymentErrorComponent
  },
];

@NgModule({
  declarations: [
    ShowQrComponent,
    QueryComponent,
    PaymentSuccessComponent,
    NumberToTextPipe,
    PaymentErrorComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BlockUIModule.forRoot(),
    RouterModule.forChild(routes),
    SlickCarouselModule
  ],
  providers: [
    provideNgxMask()
  ],
})
export class PaymentModule { }
