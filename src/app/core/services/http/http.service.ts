import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Http, HttpHeaders, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from './../../../../environments/environment.prod';

interface API {
  data: any;
  errorMessage: string;
  isSuccess: boolean;
  statusCode: number;
  successMessage: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private serverUrl = environment;
  public urlApiFile = environment;
  private BaseUrls: any = new Map();
  headers = new HttpHeaders({
   'Content-Type': 'multipart/form-data'

  })
  constructor(
    private http: HttpClient,
  ) {
    this.BaseUrls.set('marsa', environment.APIURL);

  }

  get<T>(BaseUrlKey: any, APIName: string, params?: any, showAlert = false): Observable<T> {
    let queryParams: any = [];
    if (params) {
      for (const key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
    }


    return this.http
      .get<API>(`${this.BaseUrls.get(BaseUrlKey)}${APIName}?${queryParams.join('&')}`)
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }
  search<T>(BaseUrlKey: any, APIName: string, params?: any, body?: any, showAlert = false): Observable<T> {
    let queryParams: any = [];
    if (params) {
      for (const key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
    }


    return this.http
      .post<API>(`${this.BaseUrls.get(BaseUrlKey)}${APIName}?${queryParams.join('&')}`, body ? body : null)
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }
  post<T>(BaseUrlKey: any, APIName: string, body?: any, showAlert = false, head=false): Observable<T> {
    return this.http
      .post<API>(`${this.BaseUrls.get(BaseUrlKey)}${APIName}`, body ? body : null, { headers: this.headers } )
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }

  put(
    BaseUrlKey: string,
    APIName: string,
    params?: any,
    body?: any,
    showAlert = false
  ): Observable<any> {
    let queryParams: any = [];
    if (params) {
      for (const key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
    }

    return this.http
      .put(`${this.BaseUrls.get(BaseUrlKey)}${APIName}?${queryParams.join('&')}`, body)
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }

  delete(BaseUrlKey: string, APIName: string, params?: any, showAlert = false): Observable<any> {
    let queryParams: any = [];
    if (params) {
      for (const key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
    }
    return this.http
      .delete(`${this.BaseUrls.get(BaseUrlKey)}${APIName}?${queryParams.join('&')}`)
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }

  patch(
    BaseUrlKey: string,
    APIName: string,
    params?: any,
    body?: any,
    showAlert = false
  ): Observable<any> {
    let queryParams: any = [];
    if (params) {
      for (const key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
    }

    return this.http
      .patch(`${this.BaseUrls.get(BaseUrlKey)}${APIName}${queryParams.length > 0 ? '?' + queryParams.join('&') : ''}`, body)
      .pipe(
        take(1),
        map((event: any) => {
          return event;
        })
      );
  }

  uploadAttachmentWithPipe(BaseUrlKey: string, formData: any, uploadFolderName = '') {
    let url = `${this.BaseUrls.get(BaseUrlKey)}/General/UploadImages?FolderName=${uploadFolderName}`;
    return this.http.post<any>(url, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
