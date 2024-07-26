import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardInfoComponent } from './card-info/card-info.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardInfoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';
  @Input()
  gameInfo: string = '';
}
