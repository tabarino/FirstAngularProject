import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/handleErrors/app-error';
import { NotFoundError } from '../common/handleErrors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post);
  }

  updatePost(post) {
    // PUT Example
    // post.isRead = true;
    // return this.http.put(this.url + '/' + post.id, post);

    // Patch Example
    return this.http.patch(this.url + '/' + post.id, { isRead: true });
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId).pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      })
    );
  }
}