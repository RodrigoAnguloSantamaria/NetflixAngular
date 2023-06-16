import { FilmsI,FilmI,FavouritesI } from './models/interfaces';
import { Component } from '@angular/core';

const comediaI = {

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  visible:boolean=true;
  
  recibirBoolean =(visible:boolean)=>{
    this.visible=!visible;
  }

  comedyFilms: FilmsI ={
    section:"Comedia",
    films:[
      {
      title:"Casi 300",
      image:"./assets/Comedia/casi300.webp"
      },
      {
      title:"Cazafantasmas",
      image:"./assets/Comedia/cazafantasmas.webp"
      },
      {
        title:"El Dictador",
        image:"./assets/Comedia/dictador.webp"
      },
      {
        title:"Family Guy",
        image:"./assets/Comedia/familyguy.webp"
        },
        {
        title:"Juerga",
        image:"./assets/Comedia/juerga.webp"
        },
        {
          title:"Los padres de ella",
          image:"./assets/Comedia/padresella.webp"
        }
          
    ]
  }
  actionFilms: FilmsI ={
    section:"Accion",
    films:[
      {
      title:"El protector",
      image:"./assets/Accion/elprotector.webp"
      },
      {
      title:"El protector 2",
      image:"./assets/Accion/equalizer2.webp"
      },
      {
        title:"Heat",
        image:"./assets/Accion/heat.webp"
      },
      {
        title:"John Wick 2",
        image:"./assets/Accion/johnwick2.webp"
        },
        {
        title:"El renacido",
        image:"./assets/Accion/renacido.webp"
        },
        {
          title:"Terminator 2",
          image:"./assets/Accion/terminator2.webp"
        }
          
    ]
  }
  animeFilms: FilmsI ={
    section:"Anime",
    films:[
      {
      title:"Ajin",
      image:"./assets/Anime/ajin.jpg"
      },
      {
      title:"El castillo ambulante",
      image:"./assets/Anime/castilloambulante.webp"
      },
      {
        title:"Chihiro",
        image:"./assets/Anime/chihiro.webp"
      },
      {
        title:"Evangelion",
        image:"./assets/Anime/evangelion.webp"
        },
        {
        title:"Arise",
        image:"./assets/Anime/gitsarise.webp"
        },
        {
          title:"NinoKuni",
          image:"./assets/Anime/ninokuni.jpg"
        }
          
    ]
  }

  dramaFilms: FilmsI ={
    section:"Drama",
    films:[
      {
      title:"1917",
      image:"./assets/Drama/1917.webp"
      },
      {
      title:"Arrival",
      image:"./assets/Drama/arrival.webp"
      },
      {
        title:"El club de la lucha",
        image:"./assets/Drama/clublucha.webp"
      },
      {
        title:"Culpable",
        image:"./assets/Drama/culpable.jpg"
        },
        {
        title:"Naufrago",
        image:"./assets/Drama/naufrago.webp"
        },
        {
          title:"El precio del poder",
          image:"./assets/Drama/scarface.webp"
        }
          
    ]
  }
  ficcionFilms: FilmsI ={
    section:"Ciencia ficcion",
    films:[
      {
      title:"12 Monos",
      image:"./assets/Sci-fi/12monos.webp"
      },
      {
      title:"After Earth",
      image:"./assets/Sci-fi/afterearth.webp"
      },
      {
        title:"Core",
        image:"./assets/Sci-fi/core.webp"
      },
      {
        title:"Deep Impact",
        image:"./assets/Sci-fi/deepimpact.webp"
        },
        {
        title:"Doom",
        image:"./assets/Sci-fi/doom.webp"
        },
        {
          title:"Jumper",
          image:"./assets/Sci-fi/jumper.webp"
        }
          
    ]
  }
  terrorFilms: FilmsI ={
    section:"Terror",
    films:[
      {
      title:"Apostol",
      image:"./assets/Terror/apostol.jpg"
      },
      {
      title:"La calle del terror",
      image:"./assets/Terror/calleterror.jpg"
      },
      {
        title:"Life",
        image:"./assets/Terror/life.webp"
      },
      {
        title:"Malasaña 32",
        image:"./assets/Terror/malasana.webp"
        },
        {
        title:"Multiple",
        image:"./assets/Terror/multiple.webp"
        },
        {
          title:"Reflejos",
          image:"./assets/Terror/reflejos.webp"
        }
          
    ]
  }
 favoritos: FavouritesI[] = [
  {
    position:1,
    icon:"./assets/Icons/1.png",
    iconwhite:"./assets/Icons/1_white.png",
    image:"./assets/Top10/1-papel.webp"
  },
  {
    position:2,
    icon:"./assets/Icons/2.png",
    iconwhite:"./assets/Icons/2_white.png",
    image:"./assets/Top10/2-reina.webp"
  },
  {
    position:3,
    icon:"./assets/Icons/3.png",
    iconwhite:"./assets/Icons/3_white.png",
    image:"./assets/Top10/3-titanes.webp"
  },
  {
    position:4,
    icon:"./assets/Icons/4.png",
    iconwhite:"./assets/Icons/4_white.png",
    image:"./assets/Top10/4-lostinspace.webp"
  },
  {
    position:5,
    icon:"./assets/Icons/5.png",
    iconwhite:"./assets/Icons/5_white.png",
    image:"./assets/Top10/5-dondecaben.webp"
  }
 ]
    

  
}
