import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PollItem } from 'src/_models/poll-item';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.css']
})
export class PollItemComponent implements OnInit {
  @Input() pollItem: PollItem;
  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.pollItem.pollCount++;
  }
}
