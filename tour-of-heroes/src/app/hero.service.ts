import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // Send message after fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message after fetching the hero
    this.messageService.add("HeroService: fetched hero id=${id}");
    return of(HEROES.find(hero => hero.id == id));
  }

  // Service-in-service: inject MessageService into HeroService which is injected
  // into HeroesComponent
  constructor(private messageService: MessageService) {}
}
