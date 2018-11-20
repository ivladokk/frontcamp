class News {
    constructor(dataService) {
        this._dataService = dataService;
    }

    getNews(filter) {
        Mask.show();
        this._dataService.getNewsAsync("everything", filter)
        .then(data => {
            if (data.articles) {
                this._fillArticles(data.articles);
            }
        })
        .finally(()=>Mask.hide())
        .catch(error => {
            alert(`Something went wrong...${error}`);
        });
    }

    getTopNews(filter) {
        Mask.show();
        this._dataService.getNewsAsync("top-headline", filter)
        .then(data => {
            if (data.articles) {
                this._fillArticles(data.articles);
            }
        })
        .finally(()=>Mask.hide())
        .catch(error => {
            alert(`Something went wrong...${error}`);
        });
    }

    _fillArticles(articles) {
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