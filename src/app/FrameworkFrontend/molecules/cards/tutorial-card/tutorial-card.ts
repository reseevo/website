import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-card',
  templateUrl: './tutorial-card.html',
  styleUrl: './tutorial-card.scss'
})
export class TutorialCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) duration = '';
  @Input({ required: true }) tone = '';
  @Input({ required: true }) index = '';
}
