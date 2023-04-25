import { Component, OnInit } from '@angular/core';
import {PendingService} from "./pending.service"
import {Pending} from "./pending.model"

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.sass']
})
export class PendingComponent implements OnInit {

  pendingData: Pending[];

  constructor(private pendingService:PendingService) { }

  ngOnInit(): void {
    this.loadDayOffsData();
  }


  loadDayOffsData(): void {
    this.pendingService.getPendingDayOffRequests().subscribe(
      (response: Pending[]) => {this.pendingData = response; },
      (error: any) => { console.error('Failed to fetch API data:', error);}
    );
  }

}
