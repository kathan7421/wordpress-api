import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.css']
})
export class BlogSearchComponent implements OnInit {

  searchQuery: string = '';
  posts: any[] = [];

  constructor(private wordpressService: WordpressService) {}

  searchPosts() {
    this.wordpressService.searchPosts(this.searchQuery).subscribe(posts => {
      this.posts = posts;
    });
  }
  ngOnInit(): void {
    
  }
}
