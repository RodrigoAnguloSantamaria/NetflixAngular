import { Component, Input } from '@angular/core';
import { FavouritesI } from 'src/app/models/interfaces';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent {
  @Input() item!:FavouritesI;
  @Input() visible!:boolean;
 

}
