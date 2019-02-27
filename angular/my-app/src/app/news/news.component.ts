import {Component,OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import { Observable, of } from 'rxjs';
import {Article} from '../models';
 
@Component({ 
    selector: 'app-news',
    templateUrl:'./news.component.html',
    styleUrls:['./news.component.css']
})
export class NewsComponent implements OnInit {
    news: Article[];

    constructor(private newsService:NewsService) {

    }

    ngOnInit() {
        this.news = this.newsService.getNews();
      }

    delete(id:number):void {
        this.newsService.deleteArticle(id);
    }
} 