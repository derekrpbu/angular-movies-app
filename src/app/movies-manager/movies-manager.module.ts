import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesManagerRoutingModule } from './movies-manager-routing.module';
import { MovieAddUpdateComponent } from './components/movie-add-update/movie-add-update.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';


@NgModule({
  declarations: [
    MovieAddUpdateComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MovieFilterComponent
  ],
  imports: [
    CommonModule,
    MoviesManagerRoutingModule
  ]
})
export class MoviesManagerModule { }
