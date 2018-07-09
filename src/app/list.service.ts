import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero.model';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  fetchHeroes(): Observable<Array<Hero>> {
    const heroes: Array<Hero> = [];
    for (let i = 0; i < 200; i++) {
      heroes.push({
        id: `${i}`,
        name: `Hero #${i}`
      });
    }

    // simulate an asynchronous HTTP call
    return of(heroes).pipe(delay(1000));
  }
}
