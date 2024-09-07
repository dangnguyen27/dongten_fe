import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { MNO } from "../utils/constants";

@Injectable({ providedIn: 'root' })
export class CommonService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor() {}

  isMobile() {
    // credit to Timothy Huang for this regex test: 
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
    }
    else {
      return false
    }
  }

  getCodeTelco(mobile: string) {
    let telco = "OTHER";
    // if (["09968", "09969"].indexOf(mobile.substring(0, 5)) > -1) {
    //   telco = MNO.VNM
    // }
    if (mobile.substring(0, 4) == "0995") {
      telco = MNO.VNM
    } else if (["09968", "09969"].indexOf(mobile.substring(0, 5)) > -1) {
      telco = MNO.VMS
    } else if (["09960", "09961", '09962', "09963", "09964", "09965", "09966","09967", "05981", "05983", "05985", "05986", "05987", "05988", "05989"].indexOf(mobile.substring(0, 5)) > -1
    || ["0598292"].indexOf(mobile.substring(0, 7)) > -1
    ) {
      telco = MNO.GSIM
    } else if (["0592", '0593', "0599", "0993", "0994", "0997"].indexOf(mobile.substring(0, 4)) > -1) {
      telco = MNO.VNP
    }    
    return telco;
  }

}