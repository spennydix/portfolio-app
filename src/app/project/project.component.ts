import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() projectName: string;
  @Output() projectClicked: EventEmitter<string> = new EventEmitter<string>();


  seeProject(): void{
    console.log('clicked this');
    this.projectClicked.emit('name of the active project');
  }

}
