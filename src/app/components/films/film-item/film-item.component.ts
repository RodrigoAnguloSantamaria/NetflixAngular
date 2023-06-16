import { Component, Input } from '@angular/core';
import { FilmI } from 'src/app/models/interfaces';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent {
 
@Input() film!: FilmI;

}
