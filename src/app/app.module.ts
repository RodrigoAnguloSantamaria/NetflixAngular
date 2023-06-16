import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { FilmsComponent } from './components/films/films.component';
import { BannerItemComponent } from './components/banner/banner-item/banner-item.component';
import { FilmItemComponent } from './components/films/film-item/film-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    FilmsComponent,
    BannerItemComponent,
    FilmItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
