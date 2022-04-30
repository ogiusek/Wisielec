import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TextComponent } from './text/text.component';
import { DummyComponent } from './dummy/dummy.component';
import { EndingScreenComponent } from './ending-screen/ending-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    TextComponent,
    DummyComponent,
    EndingScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
