import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  postId: number | null = null;
  post: any;

  constructor(private route: ActivatedRoute, private wordpressService: WordpressService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postIdString = params.get('id');
      if (postIdString) {
        this.postId = +postIdString;
        this.getPostById(this.postId);
      }
    });
  }
  

  getPostById(postId: number) {
    this.wordpressService.getPostById(postId).subscribe(
      (post) => {
        this.post = post;
      },
      (error) => {
        console.error('Error fetching post:', error);
      }
    );
  }
}
