import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output( )
  enviar: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  changeTheme =()=>{
    this.enviar.emit(true)
  }
  @Input() visible!:boolean;
}
