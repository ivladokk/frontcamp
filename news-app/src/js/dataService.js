export default class DataService {
    constructor(config) {
        this._config = config;
    }
    
    async getSourcesAsync(filter) {
        let params = "";
        if (filter.language && filter.language!=="all" && this._config.languages.includes(filter.language)) {
            params += params + "language=" + filter.language + "&";
        }
        if (filter.country && filter.country!=="all" && this._config.countries.includes(filter.country)) {
            params += params + "country=" + filter.country + "&";
        }
        if (filter.category && filter.category!=="all" && this._config.categories.includes(filter.category)) {
            params += params + "category=" + filter.country + "&";
        }
        let url = `${this._config.apiUrl}/sources?${params}apiKey=${this._config.apiKey}`;
        let request = new Request(url);
        let response = await fetch(request);
        if (response.ok) {
           let data = await response.json();
            return data; 
        }
        throw new Error(response.status)
    }

    _getParams(filter) {
        let params = "";
        if (filter.q) {
            params += params + "q=" + filter.q + "&";
        }
        if (filter.sources && filter.sources.length>0) {
            params+=params+"sources="+filter.sources.toString() + "&";
        }
        if (filter.language && filter.language!=="all") {
            params += params + "language=" + filter.language + "&";
        }
        if (filter.country && filter.country!=="all" ) {
            params += params + "country=" + filter.country + "&";
        }
        if (filter.category && filter.category!=="all") {
            params += params + "category=" + filter.country + "&";
        }
        return params;
    }

    async getNewsAsync(route, filter) {
        let url = `${this._config.apiUrl}/${route}?${this._getParams(filter)}apiKey=${this._config.apiKey}`;
        let request = new Request(url);
        let response = await fetch(request);
        if (response.ok) {
           let data = await response.json();
            return data; 
        }
        throw new Error(response.status)
    }
}
