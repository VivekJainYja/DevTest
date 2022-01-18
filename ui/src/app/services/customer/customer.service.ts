import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Customer } from "src/app/models/customer/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:63235/customer/";

  post(customer: Customer): Observable<any> {
    return this.http
      .post(this.apiUrl, customer)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Customer> {
    return this.http.get(this.apiUrl + id).pipe(
      map(response => response as Customer),
      catchError(this.handleError)
    );
  }

  get(): Observable<Customer[]> {
    return this.http.get(this.apiUrl).pipe(
      map((response) => response as Customer[]),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
