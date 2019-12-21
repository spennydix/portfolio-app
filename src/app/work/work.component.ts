import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  // onProjectClicked(message: string): void {
  //   console.log("I made it");
  // }
  // onMockClicked(message: string): void {
  //   console.log("I clicked it");
  // }
}
