import { Component, Input } from '@angular/core';
import { FilmsI } from 'src/app/models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() films!: FilmsI;

}
