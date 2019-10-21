import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects : Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProjects()
    .subscribe((projectList => {
        this.projects = projectList
        console.log(projectList);
      })
    );
  }
}
