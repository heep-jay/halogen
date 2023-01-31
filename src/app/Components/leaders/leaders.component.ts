import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {
  @Input() leader: any
  constructor() { }

  ngOnInit(): void {
  }

}
