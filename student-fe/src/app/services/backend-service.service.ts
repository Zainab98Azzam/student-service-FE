import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }


  getAll(url:string): Observable<any> {
    return this.http.get(url,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error: any) => {
          return throwError(error);
        }));

  }

 
}
