import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages!: any[];

  constructor(private wordpressService: WordpressService) {}

  ngOnInit(): void {
    this.wordpressService.getPages().subscribe(pages => {
      this.pages = pages;
    });
  }
}