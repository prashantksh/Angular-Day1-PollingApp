import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PollIt!';
  today = new Date();

  handleEventFromChild($event) {
    console.log('Event Handler at parent', $event);
  }
}
