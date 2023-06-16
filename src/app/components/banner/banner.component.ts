import { Component, Input } from '@angular/core';
import { FavouritesI } from 'src/app/models/interfaces';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() favourites!:FavouritesI[];
  @Input() visible!:boolean;
}
