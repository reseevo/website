import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sector-card',
  imports: [RouterLink],
  templateUrl: './sector-card.html',
  styleUrl: './sector-card.scss'
})
export class SectorCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) route = '';
  @Input({ required: true }) tone = '';
  @Input({ required: true }) icon = '';
}
