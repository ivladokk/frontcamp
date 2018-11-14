class SourceSelector {
    constructor(dataService) {
        this.dataService = dataService;
        this.selected = new Set();
    }

    getResultAsync() {
        this._openModal();
        var promise = new Promise((resolve, reject) =>{
            $("#submint_src").click(()=>{ 
                this._closeModal();
                resolve(this.selected);
            });
            $('#src_close').click(()=>{
                this._closeModal();
                reject();
            });
         });
        return promise;
    }

    _openModal() {
        this._clearSrc();
        var elements = $('.modal-overlay, .modal');
        elements.addClass('active');
    }

    _closeModal() {
        var elements = $('.modal-overlay, .modal');
        elements.removeClass('active');
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