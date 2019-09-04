import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  seeProject() {
    return console.log("clicked");
  }

  getProjects() {
    return this.http.get('/assets/projects-data.json')
  }
}
