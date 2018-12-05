

export default class HttpClientService {
    constructor(requestsFactory) {
        this._requestsFactory = requestsFactory;
    }

    async sendGet(url) {
        let request = this._requestsFactory.create(url, "GET");
        let response = await fetch(request);
        return response;
    }

    sendPost(url, data) {
        let request = this._requestsFactory.create(url, "POST", data);
        return request;
    }

    sendPut(url,data) {
        let request = this._requestsFactory.create(url, "PUT", data);
        return request;
    }

}