import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer, switchMap, takeUntil, Subject } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';
import { ObjectLocalStorage } from 'src/app/utils/constants';

const INTERVAL = 5000;

@Component({
  selector: 'app-show-qr',
  templateUrl: './show-qr.component.html',
  styleUrls: ['./show-qr.component.scss']
})

export class ShowQrComponent implements OnInit {

  closeTimer$ = new Subject<any>();
  stopTimer$ = new Subject<any>();
  

  public payment: any;
  public currentQuery: any;
  public stopCheck: boolean = false;
  returnUrl: string = '';
  cancelUrl: string = '';

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['return_url'] ? params['return_url'] : '';
      this.cancelUrl = params['cancel_url'] ? params['cancel_url'] : '';
    })
  }
  ngOnInit(): void {
    const detail = localStorage.getItem(ObjectLocalStorage.CURRENT_PAYMENT);
    this.payment  = detail ? JSON.parse(detail) : null;
    const detailQuery = localStorage.getItem(ObjectLocalStorage.CURRENT_QUERY);
    this.currentQuery = detailQuery ? JSON.parse(detailQuery) : null;
    if(this.currentQuery) {
      this.payment['amount'] = this.currentQuery.amount;
      const postData = {
        service_code: this.currentQuery.service_code,
        command: this.currentQuery.command,
        bill_id: this.currentQuery.bill_id,
        pay_id: this.payment.pay_id,
      }
      this.polling(postData);
    }
  }

  polling(postData: any) {
    var ctx = this;
    if(!this.stopCheck) {
      setInterval(function () {
        ctx.paymentService.checkPayment(postData).subscribe(res => {
          if(res.status) {
            ctx.stopCheck = true;
            localStorage.removeItem(ObjectLocalStorage.CURRENT_PAYMENT);
            localStorage.removeItem(ObjectLocalStorage.CURRENT_QUERY);
            location.href = ctx.returnUrl ? ctx.returnUrl : '/payment/success';
          } else {
            if(res.data.status == -1) {
              ctx.stopCheck = true;
              localStorage.removeItem(ObjectLocalStorage.CURRENT_PAYMENT);
              localStorage.removeItem(ObjectLocalStorage.CURRENT_QUERY);
              location.href = ctx.cancelUrl ? ctx.cancelUrl : '/payment/error';
            }
          }
        }, error => {
          
        })
      }, INTERVAL);
    }
    
    // timer(0, INTERVAL).pipe(      // <-- start immediately and poll every `INTERVAL` seconds
    //   switchMap(() => this.paymentService.checkPayment(postData)),  // <-- map to another observable
    //   takeUntil(this.closeTimer$)   // <-- close the subscription when `closeTimer$` emits
    // ).subscribe({
    //   next: (res: any) => {
    //     if (res.data.status == 1) {
    //       this.closeTimer$.next(null);           
          
    //     }
    //     // do something else
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //     // handle errors
    //     // note that any errors would stop the polling here
    //   }
    // });
  }

  

}
