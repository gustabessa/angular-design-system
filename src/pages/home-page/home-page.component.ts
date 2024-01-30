import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  H1Component,
  PComponent,
  TextGradientComponent,
} from '@components/typography';

@Component({
  standalone: true,
  imports: [H1Component, PComponent, RouterLink, TextGradientComponent],
  selector: 'ds-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
