import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';

import {SearchModel, DropdownValue, NewsSource} from '../models';





@Component({ 
    selector: 'filter',
    templateUrl:'./filter.component.html',
    styleUrls:['./filter.component.css']
})
export class FilterComponent implements OnInit {
    searchModel: SearchModel = {
        source: "",
        keyword:"",
        local:false
    };

    sources:NewsSource[] = [];
    
    constructor(private _newsService:NewsService) {

    }

   
    ngOnInit() {
       this.loadSources();
      }

    loadSources():void {
        this.sources = [{
            id: "testVal1",
            name: "testLbl1"
        },
        {
            id:"testVal2",
            name: "testLbl2"
        }, 
        {
            id:"testVal3",
            name: "testLbl3"
        }]
    }

    find():void {
        this._newsService.getNews();
    }

    
} 