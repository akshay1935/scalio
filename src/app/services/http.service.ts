import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpHeader = {};

  constructor(private http:HttpClient) { }

  get_by_observable(url: string = ""): Observable<any> {
    return this.http.get(url, this.httpHeader);
  }
}
