

export default class HttpClientService {
    constructor(requestsFactory) {
        this._requestsFactory = requestsFactory;
    }

    async sendGet(url) {
        let request = this._requestsFactory.create(url, "GET");
        let response = await fetch(request);
        return response;
    }

    async sendPost(url, data) {
        let request = this._requestsFactory.create(url, "POST", data);
        let response = await fetch(request);
        return response;
    }

    async sendPut(url,data) {
        let request = this._requestsFactory.create(url, "PUT", data);
        let response = await fetch(request);
        return response;
    }

}