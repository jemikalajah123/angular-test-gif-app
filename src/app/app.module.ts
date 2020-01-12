import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { GlobalService } from './services/global.service';
import { GifDetailsComponent } from './gif-details/gif-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent,
    GifDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }