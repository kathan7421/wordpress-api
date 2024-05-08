import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container/container.component';
import { NavComponent } from './nav.component';
import { WordpressService } from './wordpress.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { WordpressPostsComponent } from './wordpress-posts/wordpress-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PagesComponent } from './pages/pages.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { FormsModule } from '@angular/forms'; 


  


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    PostComponent,
    WordpressPostsComponent,
    BlogPostComponent,
    PagesComponent,
    BlogSearchComponent,
   
   
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
     
  ],
  providers: [WordpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
