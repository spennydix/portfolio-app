import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('/assets/projects-data.json')
  }
  getMocks() {
    return this.http.get('/assets/mocks-data.json')
  }

}
