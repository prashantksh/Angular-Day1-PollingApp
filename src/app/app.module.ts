import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { PollItemComponent } from './poll-item/poll-item.component';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule } from '@angular/forms';
import { FirstDirective } from './first.directive';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    PollItemComponent,
    PlaygroundComponent,
    FirstDirective,
    NavComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
