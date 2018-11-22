import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ListingService} from '../app/services/listing-schedule-service/listing.component.service'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ROUTING,
    RouterModule,
  ],
  providers: [
    ListingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
