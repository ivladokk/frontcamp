import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent }   from './news/news.component';
import { ArticleComponent }      from './article/article.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';
import { ArticleAddComponent }  from './article-add/article-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path:'news', component: NewsComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'add', component: ArticleAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
