import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  title = 'mophy';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
