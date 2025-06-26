import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private URL="http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  getShortenedUrl(url:string):Observable<any>{
    return this.http.post(`${this.URL}/shorturl`,{longUrl:url})
  }


}
