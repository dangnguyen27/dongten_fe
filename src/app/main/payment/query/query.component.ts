import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ObjectLocalStorage } from 'src/app/utils/constants';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  @BlockUI('section-block') blockUI!: NgBlockUI;

  queryPayment = {
    service_code: "",
    command: "QUERY",
    bill_id: ""
  }
  
  currentBillInfo: any;
  public formGroup: any;
  public submitted: boolean = false;
  public listMoney = [
    10000, 20000, 50000,100000,200000,500000
  ];
  returnUrl: string = '';
  cancelUrl: string = '';
  merchant_id: any;
  listPaymentMethod: any;
  isMobile: boolean = false;
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "dots": true};

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private toastrService: ToastrService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {
    this.initForm();
    this.route.queryParams.subscribe(params => {
      const bill_id = params['bill_id'] ? params['bill_id'] : '';
      const amount = params['amount'] ? params['amount'] : '';
      const serviceCode = params['service_code'] ? params['service_code'] : '';
      this.formGroup.patchValue({
        bill_id: bill_id,
        amount: amount,
        service_code: serviceCode
      });
      this.returnUrl = params['return_url'] ? params['return_url'] : '';
      this.cancelUrl = params['cancel_url'] ? params['cancel_url'] : '';
      this.merchant_id = params['merchant_id'] ? params['merchant_id'] : '';
      this.getData();
      if(bill_id && serviceCode) {
        this.onQuery();
      }
    });
  }
  ngOnInit(): void {
    this.isMobile = this.commonService.isMobile();
    // this.initForm();
  }

  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  onSubmit() {
    this.submitted = true;    
    this.formGroup.value.amount = parseInt(this.formGroup.value.amount);
    if(!this.formGroup.value.service_code) {
      this.formGroup.value.service_code = this.formGroup.value.code + '_' + this.formGroup.value.service  ;
    }    
    
    console.log(this.formGroup.value);
    console.log(this.formGroup);
    if(!this.formGroup.valid) {
      return;
    }
    this.blockUI.start();
    let postData: any = {};
    postData = Object.assign(postData, this.formGroup.value)
    delete postData['code'];
    delete postData['service'];
    if(postData['service_code'] == 'TELECOM_TOPUP') {
      postData['topup'] = {
        telco: this.commonService.getCodeTelco(postData['bill_id']),
        prepaid: 1
      }
    }
    postData['merchant_id'] = this.merchant_id;
    this.submitted = false;
    if(postData['payment_method'] != 'QR') {
      postData['return_url'] = location.origin + '/payment/success?return_url=' + this.returnUrl;
      postData['back_url'] = location.origin + '/payment/fail';
      this.paymentService.createOrderPaymentGate(postData).subscribe( (res: any) => {
        this.blockUI.stop();
        if(!res.status) {
  
        }
        localStorage.setItem(ObjectLocalStorage.CURRENT_PAYMENT, JSON.stringify(res.data));
        localStorage.setItem(ObjectLocalStorage.CURRENT_QUERY, JSON.stringify(postData));
        location.href = res.data.url;
      }, error => {
        this.blockUI.stop();
          if(error.error && error.error.message) {
            this.toastrService.error(error.error.message);
            return
          } else {
            this.toastrService.error("Hệ thống bận vui lòng thử lại sau");
          }
          
      })
    } else {
      this.paymentService.createQR(postData).subscribe( (res: any) => {
        this.blockUI.stop();
        if(!res.status) {
  
        }
        localStorage.setItem(ObjectLocalStorage.CURRENT_PAYMENT, JSON.stringify(res.data));
        localStorage.setItem(ObjectLocalStorage.CURRENT_QUERY, JSON.stringify(postData));
        this.router.navigate(['/payment/show-qr'], { queryParams: { return_url: this.returnUrl, cancel_url: this.cancelUrl } })
      }, error => {
        this.blockUI.stop();
          if(error.error && error.error.message) {
            this.toastrService.error(error.error.message);
            return
          } else {
            this.toastrService.error("Hệ thống bận vui lòng thử lại sau");
          }
          
      })
    }
    
  }

  onQuery() {
    const postData = {
      service_code: this.formGroup.value.service_code,
      bill_id: this.formGroup.value.bill_id,
      command: 'QUERY'
    }
    this.paymentService.query(postData).subscribe( (res: any) => {
      this.blockUI.stop();
      if(!res.status) {
        this.formGroup.patchValue({
          bill_id: '',
          amount: ''
        });
        this.toastrService.error(res.message);
        return;
      }
      this.currentBillInfo = res.data;
      this.formGroup.patchValue({
        amount: res.data.amount
      });
      // if(this.returnUrl) {
      //   this.onSubmit();
      // }
    }, error => {
      this.blockUI.stop();
        if(error.error && error.error.message) {
          this.toastrService.error(error.error.message);
          return
        } else {
          this.toastrService.error("Hệ thống bận vui lòng thử lại sau");
        }
        
    })
  }

  onSelectMoney(value: number) {
    if(!this.currentBillInfo) {
      this.formGroup.patchValue({
        amount: value
      })
    }        
  }

  getData() {
    let params = {
      merchant_id: this.merchant_id
    }
    this.paymentService.getMethod(params).subscribe(res => {
      this.listPaymentMethod = res.data;
      // this.listPaymentMethod = [...this.listPaymentMethod, ...this.listPaymentMethod];
    })
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      service: ['TOPUP', Validators.required],
      code: ['GSIM', Validators.required],
      service_code: [''],
      command: ['QUERY', Validators.required],
      bill_id: ['', Validators.required],
      amount: ['', Validators.required],
      payment_method: ['QR', Validators.required],
    })
  }
}
