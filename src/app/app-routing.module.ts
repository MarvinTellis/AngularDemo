import { DeleteheroComponent } from './deletehero/deletehero.component';
import { AddheroComponent } from './addhero/addhero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  {path : 'heroes' , component : HeroesComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'details/:id' , component : HeroDetailComponent},
  {path : 'addHero' , component : AddheroComponent},
  {path : 'deleteHero' , component : DeleteheroComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
