import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projects: Object;
  activeProject: string;
  iframe: string = "http://www.expertvoice.com";
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      // console.log("Active Project => ", fragment);
      this.activeProject = fragment;
    });

    this.data.getProjects()
      .subscribe((projectList => {
        this.projects = projectList
        // console.log(projectList);
      })
      );
  }

}
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
