

export default class HttpClientService {
    constructor(requestsFactory) {
        this._requestsFactory = requestsFactory;
    }

    sendGet(url) {
        let request = this._requestsFactory.create(url, "GET");
        return request;
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