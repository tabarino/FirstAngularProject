import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/handlerErrors/app-error';
import { NotFoundError } from '../common/handlerErrors/not-found-error';
import { BadInput } from '../common/handlerErrors/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, resource).pipe(
      catchError(this.handleError)
    );
  }

  update(resource) {
    // PUT Example
    // post.isRead = true;
    // return this.http.put(this.url + '/' + resource.id, resource);

    // Patch Example
    return this.http.patch(this.url + '/' + resource.id, { isRead: true }).pipe(
      catchError(this.handleError)
    );
  }

  delete(postId) {
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
