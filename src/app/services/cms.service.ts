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

  getListTaxonomy(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/taxonomy`, {params: params});
  }

  getDetailTaxonomy(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/taxonomy/detail`, {params: params});
  }

  getItemsByGroup(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/cms-group/items`, {params: params});
  }

  getItemsByTaxonomy(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/taxonomy/items`, {params: params});
  }

  getDetailItem(slug: string) {
    return this._http.get<any>(`${environment.apiUrl}/item?slug=${slug}`);
  }

  getNewestPodcast(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/podcast/newest`, {params: params});
  }

  getListEpisodePodcast(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/podcast/list-episode`, {params: params});
  }

  getSingplePodcastEpisode(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/podcast/single-episode`, {params: params});
  }
}