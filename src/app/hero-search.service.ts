import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';
import { ApiEndpoints } from './constants/index';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) { }

  search(term: String): Observable<Hero[]> {
    return this.http
      .get(`${ApiEndpoints.HEROES}/?name=${term}`)
      .map((response) => response.json().data as Hero[]);
  }

}
