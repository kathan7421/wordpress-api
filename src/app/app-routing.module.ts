import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordpressPostsComponent } from './wordpress-posts/wordpress-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'wordpress-posts', component: WordpressPostsComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
