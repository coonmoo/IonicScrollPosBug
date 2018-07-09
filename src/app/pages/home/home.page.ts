import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll, Event } from '@angular/router';
import { delay, filter, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  heroes: Array<Hero>;

  constructor(private router: Router, private viewportScroller: ViewportScroller, listService: ListService) {
    const scrollEvents = router.events.pipe(
      filter(e => e instanceof Scroll)
    );
  
    const subscribe = scrollEvents.subscribe(val => console.log(val));

    listService.fetchHeroes().subscribe((list) => {
      console.log(list);
      this.heroes = list;     
    });
  }
}
