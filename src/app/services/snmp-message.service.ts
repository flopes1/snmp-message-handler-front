import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { DefaultHttp } from './http.service';

@Injectable()
export class SnmpMessageService {

    constructor(
        private defaultHttp: DefaultHttp,
    ) { }

    getResults(): Promise<Response> {
        return this.defaultHttp.get('/snmp/message').toPromise();
    }

    sendMessage(message): Promise<Response> {
        return this.defaultHttp.post('/snmp/message', message).toPromise();
    }
}
