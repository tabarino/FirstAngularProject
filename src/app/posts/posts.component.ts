import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/errorHandler/app-error';
import { NotFoundError } from '../common/errorHandler/not-found-error';
import { BadInput } from '../common/errorHandler/bad-input';

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
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    
    this.postService.createPost(post).subscribe(
      response => {
        post.id = response['id'];
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          alert(error.originalError);
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
          throw error;
        }
      }
    );
  }
}
