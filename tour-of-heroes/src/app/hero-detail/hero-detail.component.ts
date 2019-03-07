import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    // holds information about the route to this instance of the HeroDetailComponent (e.g. id)
    private route: ActivatedRoute,
    // gets hero data from the remote server and this component will use it to get the hero-to-display
    private heroService: HeroService,
    // Angular service for interacting with the browser. Can navigate back to previous view
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // get static image of route info shortly after component creation
    // get id of hero to fetch
    // convert string to number (+)
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
