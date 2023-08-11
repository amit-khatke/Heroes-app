import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {HeroesComponent } from './heroes/heroes.component';
import { HEROES } from'./mock-heroes';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent,CommonModule],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes=HEROES;
  constructor() {}

  ngOnInit() {}
}
