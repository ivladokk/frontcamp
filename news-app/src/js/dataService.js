class DataService {
    constructor(config) {
        this._config = config;
    }
    
    getSourcesAsync(filter) {
        let params = "";
        if (filter.language) {
            params += params + "language=" + filter.language + "&";
        }
        if (filter.country) {
            params += params + "country=" + filter.country + "&";
        }
        if (filter.category) {
            params += params + "category=" + filter.country + "&";
        }
        let url = `${this._config.apiUrl}/sources?${params}apiKey=${this._config.apiKey}`;
        
        let request = new Request(url);
        return fetch(request)
            .then(resp=>{
                return resp.json()
            });
    }
}
