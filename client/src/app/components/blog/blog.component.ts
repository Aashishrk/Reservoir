import { Component } from '@angular/core';

import { HackerNewsService } from './blog.service';

@Component({
  selector: 'BlogComponent',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  news = {};
  constructor(private HackerNewsService: HackerNewsService) {
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
    document.body.classList.add('bg-img1');
    document.body.classList.remove('bg-img');
  }
}