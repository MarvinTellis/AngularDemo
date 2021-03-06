import { Component, OnInit } from '@angular/core';

import { HeroService } from './../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };

  heroesList : Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroesList = heroes);
  }

}
