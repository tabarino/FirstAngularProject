import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  posts;

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit(): void {
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    
    this.http.post(this.url, post).subscribe(response => {
      post.id = response['id'];
      this.posts.splice(0, 0, post);
    });
  }
}
