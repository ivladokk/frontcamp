import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './memorydata.service';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import {ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FilterComponent} from './filter/filter.component';

 

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ArticleComponent,
    ArticleDetailComponent,
    DropdownComponent,
    FilterComponent,
    ArticleAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
