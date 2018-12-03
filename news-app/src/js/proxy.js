class RequestsFactory {
    constructor() {
        this.methods = {
            "GET": (url) => new Request(url),
            "POST": (url, data) => new Request(url, {method:'POST', data: data.data, headers: data.headers}),
            "PUT": (url, data) => new Request(url, {method:'PUT', data: data.data }),
            "DELETE": (url) => new Request(url, {method: 'DELETE'})
        }
    }

    create(url, method, data) {
        return this.methods[method](url,data);
    }
}

export default class RequestsProxy {
    constructor() {
        this.factory = new RequestsFactory();
    }
    create(url, method, data) {
        console.log(`Type: ${method} URL: ${url}`);
        if (data) {
            console.log(data);
        }
        return this.factory.create(url, method, data);
    }
}