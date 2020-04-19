import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model : Hero = {
    id : null,
    name : ''
  };

  submitted = false;

  onSubmit(form : NgForm) { 
    this.submitted = true;
    HEROES.push({id : form.value.id , name :form.value.name}); 
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
  
  }

}
