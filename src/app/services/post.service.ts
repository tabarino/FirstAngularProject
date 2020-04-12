import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: HttpClient) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    super(url, http);
  }
}
