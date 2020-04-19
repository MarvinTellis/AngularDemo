import { Component, OnInit } from '@angular/core';

import { HeroService } from './../hero.service';
import { Hero } from './../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroesList: Hero[] = [];

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroesList = heroes.slice(1, 5));
  }

}