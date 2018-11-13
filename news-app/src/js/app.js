const config = new ConfigurationService();
const dataService = new DataService(config);

this.showOrHideAllSources = function() {
    let el = document.getElementById('sources-all');
    if (el.classList.contains('hidden')) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }   
}

/*const onCheckedSourcesChanged = (sender, args) =>{
    let container = document.getElementById('sources-checked-list');
    if (container || container.hasChildNodes()) {
        for (var child of container.childNodes) {
            child.remove();
          }
    }
    for (let x of this.checkedSources) {
        let item = createCheckedSource(x);
        container.appendChild(item);
    }
}

this.onCheckedSourcesChangedEvent = new MyEvent('onCheckedSourcesChanged');
this.onCheckedSourcesChangedEvent.register(onCheckedSourcesChanged);
*/
this.srcFilter = {
}
this.checkedSources = new Set();


const fillSources = (filter)=> {
    dataService.getSourcesAsync(filter)
        .then(res => {
            //this.srcList = res.sources;
            this.checkedSources.clear();
            let container = document.getElementById('sources-items');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            res.sources.map(obj => {
                let item = createSourceItem(obj);
                container.appendChild(item);
            });
           
        });
}


const createSourceItem = (item) => {
    let container = document.createElement('div');
    container.classList.add('source-item');
    container.id = item.id;
    let name = document.createElement('span');
    name.classList.add('source-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    container.appendChild(name);
    container.onclick = (event) =>{
        let isChecked = this.checkedSources.has(item);
        if (!isChecked) {
            container.classList.add('checked');
            this.checkedSources.add(item);
            //this.onCheckedSourcesChangedEvent.invoke(container, item);
        } else {
            container.classList.remove('checked');
            this.checkedSources.delete(item);
            //this.onCheckedSourcesChangedEvent.invoke(container, item);
        }
    };
    return container;
}

const createCheckedSource = (item) => {
    let container = document.createElement('div');
    container.classList.add('source-checked');
    let name = document.createElement('span');
    name.classList.add('source-checked-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    let deleteText = document.createTextNode('delete');
    deleteBtn.appendChild(deleteText);
    deleteBtn.onclick = (event) =>{
        this.checkedSources.delete(item);
        //this.onCheckedSourcesChangedEvent.invoke(deleteBtn, item);
    }
    container.appendChild(name);
    container.appendChild(deleteBtn);
    return container;
}

const setDropdownValues = (el, src)=> {
    for (let x of src) {
        let item = document.createElement('option');
        item.value = x;
        item.text = x;
        el.appendChild(item);
    }
}

const init = ()=>{
    setDropdownValues(document.getElementById('source-language'), config.languages);
    setDropdownValues(document.getElementById('source-country'), config.countries);
    setDropdownValues(document.getElementById('source-category'), config.categories);
    setDropdownValues(document.getElementById('language'), config.languages);

    var elements = $('.modal-overlay, .modal');

    $('.button').click(function(){
        elements.addClass('active');
    });

    $('.close-modal').click(function(){
        elements.removeClass('active');
    });
}

const closeModal = () => {
    var elements = $('.modal-overlay, .modal');
    elements.removeClass('active');
}

document.addEventListener("DOMContentLoaded", init);
//let src = fillSources({language: "en"});

this.getSrc = function() {
    let filter = {
        language: document.getElementById('source-language').value,
        category: document.getElementById('source-category').value,
        country: document.getElementById('source-country').value
    };
    fillSources(filter);
}

const createNewsItem =(item) => {
    let container = document.createElement('div');
    container.classList.add('news-item');
    container.id = item.id;
    let name = document.createElement('span');
    name.classList.add('news-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    container.appendChild(name);
    return container;   
}


const createNewsCard = (item)=>{
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
    body.appendChild(title);
    body.appendChild(desc);
    container.appendChild(body);
    return container;

}

const fillNews = (filter) => {
    dataService.getNewsAsync(filter)
        .then(res => {
            this.news = res.articles;
            this.news.map(obj => {
                let item = createNewsCard(obj);
                let container = document.getElementsByClassName('results');
                container[0].appendChild(item);
            });
        })
}

this.saveSrc = function() {
    let el = document.getElementById('sources-checked-list');
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
    for (const x of this.checkedSources) {
        el.appendChild(createCheckedSource(x));
    }
    $('.close-modal').click();
}

this.getNews = function() {
    fillNews({q:"bitcoin"});
}



this.openSrcFilter = () => {
    
}


