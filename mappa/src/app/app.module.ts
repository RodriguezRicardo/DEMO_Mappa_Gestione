import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBO3v9vkk7OdjrUFZGcFkKm6Y6WZc3fMX0'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
