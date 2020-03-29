import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {
  constructor(http: HttpClient) {
    let url = 'https://api.github.com/users/tabarino/followers';
    super(url, http);
  }
}
