class News {
  constructor(dataService) {
    this._dataService = dataService;
  }

  async getNews(filter) {
    this.showLoadingMask();

    try {
      let result = await this._dataService.getNews("everything", filter);
      let articles = await result.json();
      articles = articles.articles;

      if (articles) {
        let container = document.getElementById('results');

        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        articles.map(obj => {
          let item = this._createNewsCard(obj);

          let container = document.getElementById('results');
          container.appendChild(item);
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  getTopNews(filter) {}

  showLoadingMask() {}

  hideLoadingMask() {}

  handleError(error) {}
  /*
      getNews(filter) {
          dataService.getNewsAsync(filter)
          .then(res => {
              if (res.articles) {
                  let container = document.getElementById('results');
                  while (container.firstChild) {
                      container.removeChild(container.firstChild);
                  }
                  res.articles.map(obj => {
                      let item = this._createNewsCard(obj);
                      let container = document.getElementById('results');
                      container.appendChild(item);
                  });
              }
              
          })
      }
  
      getTopNews(filter) {
          dataService.getTopNewsAsync(filter)
          .then(res => {
              if (res.articles) {
                  res.articles.map(obj => {
                      let item = this._createNewsCard(obj);
                      let container = document.getElementById('results');
                      container.appendChild(item);
                  });
              }
              
          })
      }*/


  _createNewsCard(item) {
    let container = document.createElement('div');
    container.classList.add('news-card');
    let header = document.createElement('div');
    header.classList.add('news-card-header');

    if (item.urlToImage) {
      header.style.background = `url('${item.urlToImage}')`;
      header.style.backgroundSize = 'cover';
      header.style.backgroundRepeat = 'no-repeat';
    } else {
      header.classList.add('news-card-header--no-cover');
    }

    let author = document.createElement('div');
    author.classList.add('news-card-author');
    let authorName = document.createElement('span');
    author.appendChild(document.createTextNode(item.author));
    author.appendChild(authorName);
    let src = document.createElement('div');
    src.classList.add('news-card-source');
    let srcText = document.createElement('span');
    srcText.appendChild(document.createTextNode(item.source.name));
    src.appendChild(srcText);
    header.appendChild(author);
    header.appendChild(src);
    container.appendChild(header);
    let body = document.createElement('div');
    body.classList.add('news-card-body');
    let title = document.createElement('h4');
    title.appendChild(document.createTextNode(item.title));
    title.classList.add('news-card-title');
    let desc = document.createElement('p');
    desc.appendChild(document.createTextNode(item.description));
    desc.classList.add('news-card-description');
    let link = document.createElement('a');
    link.appendChild(document.createTextNode("See more"));
    link.setAttribute('href', item.url);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(link);
    container.appendChild(body);
    return container;
  }

}