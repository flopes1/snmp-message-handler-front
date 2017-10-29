import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DefaultHttp {

    protected headers: Headers;
    private SERVICE_URL = 'http://localhost:8077';

    constructor(protected http: Http) {
    }

    public post(url: string, object: any): Observable<Response> {
        return this.http.post(this.SERVICE_URL + url, object, { headers: this.headers });
    }

    public get(url: string): Observable<Response> {
        return this.http.get(this.SERVICE_URL + url, { headers: this.headers });
    }

    private getHeaders(): void {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

}
