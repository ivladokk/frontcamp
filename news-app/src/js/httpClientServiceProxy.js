import RequestsFactory from './factory.js';
import HttpClientService from './httpClientService.js';

export default class HttpClientServiceProxy {
    constructor() {
        let factory = new  RequestsFactory();
        const httpClientService = new HttpClientService(factory);

        const handler ={
            get(target, name) {
                return Object.assign({}, ['get','post', 'put']
                    .reduce((obj,method)=>Object.assign({}, obj, {
                        [method](url ='', body={}, params={}) {

                            switch(method) {
                                case "get": {
                                    console.log(`GET ${url}`)
                                    return httpClientService.sendGet(url);
                                }
                                case "post": {
                                    console.log(`POST ${url}`)
                                    return httpClientService.sendPost(url, data);
                                }
                                case "put": {
                                    console.log(`PUT ${url}`)
                                    return httpClientService.sendPost(url, data);
                                }
                                default:break;
                            }
                        }
                    }),{})
                );
            }
        }

        this.instance = new Proxy({}, handler);
    }

   
}


