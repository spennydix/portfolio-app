import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects : Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProjects().subscribe(data => {
        this.projects = data
        console.log(this.projects);
      }
    );
  }

  seeProject() {
    console.log("clicked");
  }

}
