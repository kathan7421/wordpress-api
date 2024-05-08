import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service'; // Assuming t
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.css']
})
export class WordpressPostsComponent implements OnInit {
  posts: any[] = [];
  postId: number | null =null;
  post: any;

  constructor(private route: ActivatedRoute, private wordpressService: WordpressService,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchPosts();
    
  }

  fetchPosts() {
    this.http.get<any[]>('https://iss-oman.clients-view.com/wp-json/wp/v2/posts?_embed').subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  getPostById(postId: number) {
    this.router.navigate(['/blog', postId]);
  }

}
