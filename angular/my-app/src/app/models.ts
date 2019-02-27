export class NewsSource {
  id:string;
  name:string;
}

export class Article {
    id: number;
    title: string;
    source:NewsSource;
    author:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content:string;
}

export class SearchModel {
  source: string;
  keyword: string;
  local: boolean;
}

export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}
