import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Provider } from './provider/provider';

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
    SharedModule
  ],
  providers: [
    Provider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
