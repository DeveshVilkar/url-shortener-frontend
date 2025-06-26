import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getShortenedUrl(url: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/shorturl`, { longUrl: url })
  }


}
