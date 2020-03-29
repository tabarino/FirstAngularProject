import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/handlerErrors/app-error';
import { NotFoundError } from '../common/handlerErrors/not-found-error';
import { BadInput } from '../common/handlerErrors/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(
      posts => this.posts = posts
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    
    this.postService.create(post).subscribe(
      newPost => {
        post.id = newPost['id'];
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

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
    this.postService.update(post).subscribe(
      updatedPost => console.log(updatedPost)
    );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
          throw error;
        }
      }
    );
  }
}
