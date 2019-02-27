import {Component,OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Article} from '../models';

@Component({
    selector: 'article-add',
    templateUrl: './article-add.component.html',
    styleUrls: ['article-add.component.css']
})

export class ArticleAddComponent implements OnInit {

    article: Article = new Article();

    constructor (private route:ActivatedRoute, private newsService: NewsService, private location:Location) {

    }
   
    ngOnInit() {
        
    }

    save():void {
        this.newsService.addArticle(this.article);
        this.back();
    }

    cancel():void {
        this.location.back();
    }

    back():void {
        this.location.back();
    }
}