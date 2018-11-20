class DataService {
  constructor(config) {
    this._config = config;
  }

  getSourcesAsync(filter) {
    let params = "";

    if (filter.language && filter.language !== "all") {
      params += params + "language=" + filter.language + "&";
    }

    if (filter.country && filter.country !== "all") {
      params += params + "country=" + filter.country + "&";
    }

    if (filter.category && filter.category !== "all") {
      params += params + "category=" + filter.country + "&";
    }

    let url = `${this._config.apiUrl}/sources?${params}apiKey=${this._config.apiKey}`;
    let request = new Request(url);
    return fetch(request).then(resp => {
      return resp.json();
    });
  }

  _getParams(filter) {
    let params = "";

    if (filter.q) {
      params += params + "q=" + filter.q + "&";
    }

    if (filter.sources && filter.sources.length > 0) {
      params += params + "sources=" + filter.sources.toString() + "&";
    }

    if (filter.language && filter.language !== "all") {
      params += params + "language=" + filter.language + "&";
    }

    if (filter.country && filter.country !== "all") {
      params += params + "country=" + filter.country + "&";
    }

    if (filter.category && filter.category !== "all") {
      params += params + "category=" + filter.country + "&";
    }

    return params;
  }

  getNews(rote, filter) {
    let url = `${this._config.apiUrl}/${rote}?${this._getParams(filter)}apiKey=${this._config.apiKey}`;
    let request = new Request(url);
    return fetch(request);
  }

}