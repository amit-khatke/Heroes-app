import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input,OnInit } from '@angular/core';
import { Hero } from '../hero';
import{HEROES}from'../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroesComponent implements OnInit {
  heroes=HEROES;
  selectedHero?:Hero;
  constructor(){}
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }
  ngOnInit() {}
}
