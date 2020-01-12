import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFieldComponent } from './search-field/search-field.component';
import { GifDetailsComponent } from './gif-details/gif-details.component';

const routes: Routes = [
  { path: 'gif-details', component: GifDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
