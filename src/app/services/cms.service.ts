import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class CmsService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  getItemsByGroup(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/cms-group/items`, {params: params});
  }

  getItemsByTaxonomy(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/taxonomy/items`, {params: params});
  }

  getDetailItem(slug: string) {
    return this._http.get<any>(`${environment.apiUrl}/item?slug=${slug}`);
  }

  getNewestPodcast() {
    return this._http.get<any>(`${environment.apiUrl}/podcast/newest`);
  }

  getSingplePodcastEpisode(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/podcast/single-episode`, {params: params});
  }
}