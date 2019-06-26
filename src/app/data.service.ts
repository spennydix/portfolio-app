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

  getUsers() {
    // return this.http.get('http://127.0.0.1:8080/projects-data.json')
    return this.http.get('https://api.myjson.com/bins/1hc80p')

  }
}
