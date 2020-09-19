8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        req = req.clone({
            setParams: {
                api_key: environment.key
            }
        });

        return next.handle(req);
    }
}
