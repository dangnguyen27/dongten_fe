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

  getTaxonomiesByGroup(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/cms-group/taxonomies`, {params: params});
  }

  getItemsByTaxonomy(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/taxonomy/items`, {params: params});
  }

  getDetailItem(slug: string, item_type: string) {
    return this._http.get<any>(`${environment.apiUrl}/item/detail?slug=${slug}&item_type=${item_type}`);
  }

  postComment(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/comemnt`, data);
  }

  getAllItems(params: any) {
    return this._http.get<any>(`${environment.apiUrl}/item`, {params: params});
  }

  getComments(id: number, params: any) {
    return this._http.get<any>(`${environment.apiUrl}/item/${id}/comments`, {params: params});
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

  getNotifications(params: any = null) {
    return this._http.get<any>(`${environment.apiUrl}/user/notifications`, {params: params});
  }
}