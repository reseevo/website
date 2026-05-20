import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCard {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
