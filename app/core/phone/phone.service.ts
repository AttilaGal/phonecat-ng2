import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService{
    http: Http;

    constructor(http: Http) {
      this.http = http;
    }

    getAllPhones(): Observable<PhoneData[]>{
      return this.http
        .get('phones/phones.json')
        .map( (res: Response) => res.json() );
    }

    getPhone(phoneId) {
      return this.http
        .get(`phones/${phoneId}.json`)
        .map( (res: Response) => res.json() );
    }

}

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}
