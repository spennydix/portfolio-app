import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mock-details',
  templateUrl: './mock-details.component.html',
  styleUrls: ['./mock-details.component.scss']
})
export class MockDetailsComponent implements OnInit {

  mocks: any;
  activeMock: string;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      // console.log("Active Mock => ", fragment);
      this.activeMock = fragment;
    });

    this.data.getMocks()
      .subscribe((mockList => {
        this.mocks = mockList
        // console.log(mockList);
      })
      );
  }

}
