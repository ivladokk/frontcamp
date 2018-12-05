export default class HttpClientServiceProxy {
    constructor(httpClientService) {
        const handler = {
            get(target, propKey, receiver) {
                let orig = target[propKey];
                return async (...args) => {
                    let result = await orig.apply(httpClientService,args);
                    console.log(`Method:' + ${propKey} Params: ${JSON.stringify(args)}`);
                    return result;
                }

            }
        };

        return new Proxy(httpClientService, handler);
    }
}


