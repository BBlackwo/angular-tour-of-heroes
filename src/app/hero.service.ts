import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { ApiEndpoints } from './constants/index';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.handleError.bind(this);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(ApiEndpoints.HEROES)
      .toPromise()
      .then((response) => response.json().data as Hero[])
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${ApiEndpoints.HEROES}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero) {
    const url = `${ApiEndpoints.HEROES}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string) {
    return this.http
      .post(ApiEndpoints.HEROES, JSON.stringify({ name }), { headers: this.headers })
      .toPromise()
      .then((res) => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${ApiEndpoints.HEROES}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
