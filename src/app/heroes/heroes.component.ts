import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroesComponent {
  hero: Hero = {
    id: 10,
    name: 'Messi',
  };
}
