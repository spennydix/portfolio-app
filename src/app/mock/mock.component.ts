import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss'],
})
export class MockComponent implements OnInit {

  mocks : Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMocks()
    .subscribe((mockList => {
        this.mocks = mockList
        console.log(mockList);
      })
    );
  }

}
