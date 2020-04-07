import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/api/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/api/orders') && method === 'GET':
                    return orders();                
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { email, password } = body;

            if (email === 'ivan@domain.com' && password === '1234') {
                return ok({ token: token });
            } else {
                return error('Username or password is incorrect');
            }
        }

        function orders() {
            if (headers.get('Authorization') === 'Bearer ' + token) {
                return ok( [1, 2, 3] );
            } else {
                return unauthorized();
            }
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body: body }))
        }

        function error(message) {
            return of(new HttpResponse({ status: 400 }));
            // return throwError({ error: { message: message } });
        }

        function unauthorized() {
            return of(new HttpResponse({ status: 401 }));
            // return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
