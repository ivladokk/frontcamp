class DataService {
    constructor(config) {
        this._config = config;
    }
    
    getSourcesAsync(filter) {
        let params = "";
        if (filter.language && filter.language!=="all") {
            params += params + "language=" + filter.language + "&";
        }
        if (filter.country && filter.country!=="all" ) {
            params += params + "country=" + filter.country + "&";
        }
        if (filter.category && filter.category!=="all") {
            params += params + "category=" + filter.country + "&";
        }
        let url = `${this._config.apiUrl}/sources?${params}apiKey=${this._config.apiKey}`;
        
        let request = new Request(url);
        return fetch(request)
            .then(resp=>{
                return resp.json()
            });
    }

    getNewsAsync(filter) {
        let params = "";
        if (filter.q) {
            params += params + "q=" + filter.language + "&";
        }
        if (filter.sources) {
            params+=params+"sources="+filter.sources.toString();
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
        let url = `${this._config.apiUrl}/everything?${params}apiKey=${this._config.apiKey}`;
        let request = new Request(url);
        return fetch(request)
            .then(resp=>{
                return resp.json()
            });
    }
}
