import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(httpClient: HttpClient) {
    httpClient.get(
      'https://jsonplaceholder.typicode.com/posts'
    ).subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit(): void {
  }

}
