import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
    response => {
      this.posts = response;
    },
    error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    
    this.postService.createPost(post).subscribe(
    response => {
      post.id = response['id'];
      this.posts.splice(0, 0, post);
    },
    (error: Response) => {
      if (error.status === 400) {
        alert('Bad request');
        // this.form.setErrors(error);
      } else {
        alert('An unexpected error occurred');
        console.log(error);
      }
    });
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
    response => {
      console.log(response);
    },
    error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe(
    response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    (error: Response) => {
      if (error.status === 404) {
        alert('This post has already been deleted');
      } else {
        alert('An unexpected error occurred');
        console.log(error);
      }
    });
  }
}
