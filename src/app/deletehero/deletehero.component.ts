import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deletehero',
  templateUrl: './deletehero.component.html',
  styleUrls: ['./deletehero.component.css']
})
export class DeleteheroComponent implements OnInit {

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
    HEROES.pop(); 
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
