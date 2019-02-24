import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // Functions
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes() with observable
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  /* Original getHeroes function
  //Assigns array of heroes to components heroes property. Does so synchronously, would cause browser to freeze waiting for server.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */
}
