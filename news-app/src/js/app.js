class App {
    constructor() {
        this.config = {
            apiUrl: "https://newsapi.org/v2/",
            apiKey: "788080c99995412c9c08fb95499225a2",
            languages: ["all", "ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"],
            countries: ["all", "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"],
            categories: ["all", "business", "entertainment", "general", "health", "science", "sports", "technology"]
        };  
        this.dataService = new DataService(this.config);
        this.selectedSources = new Set();
    }

    _createCheckedSource(item) {
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
    };

    _setDropdownValues(el, src) {
        for (let x of src) {
            let item = document.createElement('option');
            item.value = x;
            item.text = x;
            el.appendChild(item);
        }
    }

    init() {
        this._setDropdownValues(document.getElementById('source-language'), this.config.languages);
        this._setDropdownValues(document.getElementById('source-country'), this.config.countries);
        this._setDropdownValues(document.getElementById('source-category'), this.config.categories);
        this._setDropdownValues(document.getElementById('language'), this.config.languages);
        document.getElementById('select_src').addEventListener("click", ()=> this.selectSrc(), false);
    }

    async selectSrc() {
        let src = new SourceSelector(this.dataService);
        let filter = {
            language: document.getElementById('source-language').value,
            category: document.getElementById('source-category').value,
            country: document.getElementById('source-country').value
        };
        document.getElementById('find_btn').addEventListener("click", ()=> src.findSources(filter), false);
        let result = await src.getResultAsync();
        if (result) {
            this._fillSelectedSources(result);
        }
    }

    _fillSelectedSources(src) {
        this.selectedSources = src;
        let el = document.getElementById('sources-checked-list');
        while(el.firstChild) {
            el.removeChild(el.firstChild);
        }
        for (const x of this.selectedSources) {
            el.appendChild(this._createCheckedSource(x));
        }
    }

    _combineFilter() {
        let sources = [];
        for (let x of this.selectedSources) {
            sources.push(x.id);
        }
        return {
            q: document.getElementById('q').value,
            sources: sources,
            language: document.getElementById('language').value
        };
    }

    getNews() {
        let news = new News(this.dataService);
        news.getNews(this._combineFilter());
    }

    getTopNews() {
        let news = new News(this.dataService);
        news.getNews(this._combineFilter());
    }
}








