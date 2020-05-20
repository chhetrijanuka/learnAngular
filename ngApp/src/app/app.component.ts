import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  artists: object;



  constructor( private http : HttpClient) {
    // this.query = '';
  }
  ngOnInit(): void {
    this.http.get<object>('./assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    )
  }
}