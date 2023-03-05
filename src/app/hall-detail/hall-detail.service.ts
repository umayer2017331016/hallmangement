import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Prices } from '../prices';

@Injectable({
  providedIn: 'root'
})
export class HallDetailService {

  private prices$ = new Subject<Prices>();
  private apiUrl = 'http://localhost:4050/api/';

  constructor(private httpClient: HttpClient) {}

  get price() { return this.prices$.asObservable(); }

  findHallPriceDetails() {
    return this.httpClient.get<any>(`${this.apiUrl}prices/findHallPriceDetails`).pipe
    (
      switchMap(({ price }) => {
        this.setPrice(price);
        // console.log('found price detalis done', price);
        return of(price);
      }),
      catchError(err => {
        return throwError(`Your Hall Fee Details not fetch. Please try again`);
      })
    );
  }

  private setPrice(price: any) {
    this.prices$.next(price);
  }

}
