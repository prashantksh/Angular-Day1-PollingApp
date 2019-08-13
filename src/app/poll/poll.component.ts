import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  items: PollItem[];
  constructor(private pollService: PollService) {}

  childTitle = 'Ball';

  ngOnInit() {
    this.items = this.pollService.items;
  }
}
