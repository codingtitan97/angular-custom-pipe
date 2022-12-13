import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { removeVowel } from './custom-pipe.pipe';
import { ConvertLetterPipe } from './convert-letter.pipe';
import { ImpurePipePipe } from './impure-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    removeVowel,
    ConvertLetterPipe,
    ImpurePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
