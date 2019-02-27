import { Component,OnInit } from '@angular/core';
import {NewsService} from '../news.service';


import { ActivatedRoute } from '@angular/router';
import {Article} from '../models';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['article.component.css']
})

export class ArticleComponent implements OnInit {

    article:Article;

    constructor(private newsService: NewsService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.article = this.newsService.getArticleById(id);
    }
}