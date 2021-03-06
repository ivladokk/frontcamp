class SourceSelector {
    constructor(dataService) {
        this.dataService = dataService;
        this.selected = new Set();
    }

    getResultAsync() {
        this._openModal();
        var promise = new Promise((resolve, reject) =>{
            document.getElementById("submint_src").addEventListener("click", (event)=> {
                this._closeModal();
                resolve(this.selected);
            }, false);
            document.getElementById("src_close").addEventListener("click", (event)=>{
                this._closeModal();
                reject();
            }, false);
         });
        return promise;
    }

    _openModal() {
        this._clearSrc();
        document.getElementById('overlay').classList.add('active');
        document.getElementById('modal').classList.add('active');
    }

    _closeModal() {
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('modal').classList.remove('active');
    }


    _createSourceItem(item) {
        let container = document.createElement('div');
        container.classList.add('source-item');
        container.id = item.id;
        let name = document.createElement('span');
        name.classList.add('source-name');
        let nameText = document.createTextNode(item.name);
        name.appendChild(nameText);
        container.appendChild(name);
        container.onclick = (event) =>{
            let isChecked = this.selected.has(item);
            if (!isChecked) {
                container.classList.add('checked');
                this.selected.add(item);
            } else {
                container.classList.remove('checked');
                this.selected.delete(item);
            }
        };
        return container;
    }

    findSources(filter) {
        dataService.getSourcesAsync(filter)
            .then(res => {
                this.selected.clear();
                this._clearSrc();
                let container = document.getElementById('sources-items');
                res.sources.map(obj => {
                    let item = this._createSourceItem(obj);
                    container.appendChild(item);
                });
            });
    }

    _clearSrc() {
        let container = document.getElementById('sources-items');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    
}