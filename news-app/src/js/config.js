class ConfigurationService {
    constructor() {
        this.apiUrl = "https://newsapi.org/v2/";
        this.apiKey = "788080c99995412c9c08fb95499225a2";
        this.languages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"];
        this.countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
        this.categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    }

}

class MyEvent {
    constructor(eventName) {
        this._eventName = eventName;
        this._callbacks = [];
    }

    register(callback) {
        if (!this._callbacks.includes(callback)) {
            this._callbacks.push(callback);
        }
    }

    unregister(callback) {
        _.remove(this._callbacks, callback);

    }

    invoke(sender, args) {
        this._callbacks.forEach(function (callback) {
            callback(sender, args);
        });
    }
}