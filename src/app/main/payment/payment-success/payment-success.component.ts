import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectLocalStorage } from 'src/app/utils/constants';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit{
  returnUrl: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['return_url'] ? params['return_url'] : '';     
    })
  }

  ngOnInit(): void {
    localStorage.removeItem(ObjectLocalStorage.CURRENT_PAYMENT);
    localStorage.removeItem(ObjectLocalStorage.CURRENT_QUERY);
    if (this.returnUrl) {
      location.href = this.returnUrl
    }
  }

}
