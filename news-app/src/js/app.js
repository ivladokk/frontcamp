const config = new ConfigurationService();
const dataService = new DataService(config);
this.selectedSources = new Set();

const createCheckedSource = (item) => {
    let container = document.createElement('div');
    container.classList.add('source-checked');
    let name = document.createElement('span');
    name.classList.add('source-checked-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    let deleteText = document.createTextNode('x');
    deleteBtn.appendChild(deleteText);
    deleteBtn.onclick = (event) =>{
        this.selectedSources.delete(item);
        container.parentNode.removeChild(container);
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
}

document.addEventListener("DOMContentLoaded", init);

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

this.selectSrc = function() {
    var src = new SourceSelector(config, dataService);
    let filter = {
        language: document.getElementById('source-language').value,
        category: document.getElementById('source-category').value,
        country: document.getElementById('source-country').value
    };
    document.getElementById('find_btn').addEventListener("click", ()=> src.findSources(filter), false);
    src.getResultAsync().then(result=>{
        this.fillSelectedSources(result);
    }).catch(()=>{});
}

this.fillSelectedSources = function(src) {
    this.selectedSources = src;
    let el = document.getElementById('sources-checked-list');
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
    for (const x of this.selectedSources) {
        el.appendChild(createCheckedSource(x));
    }
}


this.getNews = function() {
    
    let sources = [];
    for (let x of this.selectedSources) {
        sources.push(x.id);
    }
    let filter = {
        q: document.getElementById('q').value,
        sources: sources,
        language: document.getElementById('language').value
    }
    let news = new News(dataService);
    news.getNews(filter);
}

this.getTopNews = function() {
    let sources = [];
    for (let x of this.selectedSources) {
        sources.push(x.id);
    }
    let filter = {
        q: document.getElementById('q').value,
        sources: sources,
        language: document.getElementById('language').value
    }
    let news = new News(dataService);
    news.getTopNews(filter);
}



