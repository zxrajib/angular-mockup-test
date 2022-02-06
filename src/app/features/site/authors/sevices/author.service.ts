import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  public base_url = environment.baseUrl;

  constructor(public http: HttpClient) {}

  authorList(start: number, limit: number) {
    return this.http
      .get(`${this.base_url}authors?limit=${limit}&start=${start}`)
      .pipe(
        retry(0),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
