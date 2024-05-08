// wordpress.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  private apiUrl = 'https://iss-oman.clients-view.com//wp-json/wp/v2/posts';
  private apiUrl1 = 'https://iss-oman.clients-view.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getPostById(postId: number): Observable<any> {
    return this.http.get<any>('https://iss-oman.clients-view.com//wp-json/wp/v2/posts/' + postId);
  }
  getPages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl1}pages`);
  }

  getPageById(pageId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl1}pages/${pageId}`);
  }
  searchPosts(query:string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl1}posts?search=${query}`);
  }
}
