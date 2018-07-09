import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Hero } from './models/hero.model';
import { ListService } from './list.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListResolveService implements Resolve<Array<Hero>> {

  constructor(private listService: ListService) { }

  resolve(): Observable<Array<Hero>> {
    return this.listService.fetchHeroes();
  }
}
