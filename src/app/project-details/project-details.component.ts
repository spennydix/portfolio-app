import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projects: Object;
  activeProject: [any];
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      console.log("Active Project => ", fragment)
    });

    this.data.getProjects()
      .subscribe((projectList => {
        this.projects = projectList;
        console.log(projectList);
      })
      );

  }

}
