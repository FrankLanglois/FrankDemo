import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string;
  isCollapsed: boolean;

  ngOnInit(): void {
    this.title = 'Demo Pipes - Directives - HttpClient';
    this.isCollapsed = true;
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}
