import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/handlerErrors/app-error';
import { NotFoundError } from '../common/handlerErrors/not-found-error';
import { BadInput } from '../common/handlerErrors/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post) {
    return this.http.post(this.url, post).pipe(
      catchError(this.handleError)
    );
  }

  updatePost(post) {
    // PUT Example
    // post.isRead = true;
    // return this.http.put(this.url + '/' + post.id, post);

    // Patch Example
    return this.http.patch(this.url + '/' + post.id, { isRead: true }).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
