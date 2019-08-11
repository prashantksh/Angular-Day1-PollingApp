import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  @Input() displayStatus: boolean;
  @Output() onPollSubmit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitPoll() {
    this.onPollSubmit.emit('User has submitted the poll!');
  }
}
