import {Component,OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Article} from '../models';

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {

    article: Article;

    constructor (private route:ActivatedRoute, private newsService: NewsService, private location:Location) {

    }
   
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.article = this.newsService.getArticleById(id);
    }

    save():void {
        this.newsService.updateArticle(this.article);
        this.back();
    }

    cancel():void {
        this.location.back();
    }

    back():void {
        this.location.back();
    }
}