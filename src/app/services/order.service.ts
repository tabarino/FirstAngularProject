import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getOrders() {
    // This is just an example how to append options in the http header
    // It's not necessary in this case, because
    // JwtModule implements Authorization: Bearer by default OOTB
    const headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    return this.http.get('/api/orders', { headers }).pipe(
      map(response => response)
    );
  }
}
