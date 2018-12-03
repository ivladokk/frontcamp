export default class SingletonHandler {
    static getInstance() {
        if(!this._instance) {
            this._instance = new SingletonHandler(); 
        }
        return this._instance;
    }
    handleError(msg) {
        alert(`Something went wrong...${msg}`);
    }
}