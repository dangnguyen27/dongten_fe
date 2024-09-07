import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PaymentService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  query(data: any = null) {
    return this._http.post<any>(`${environment.apiUrl}/merchant/payment/query`, data);
  }

  createQR(data: any = null) {
    return this._http.post<any>(`${environment.apiUrl}/merchant/payment/generate-qr`, data);
  }


  checkPayment(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/merchant/payment/check-payment`, data);
  }

  createOrderPaymentGate(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/merchant/payment/order-gateway`, data);
  }

  getMethod(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/merchant/payment/methods`, {params: params});
  }

}