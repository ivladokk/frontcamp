
const config = new ConfigurationService();
const dataService = new DataService(config);

this.showOrHideAllSources = function() {
    let el = document.getElementById('sources-all');
    if (el.classList.contains('hidden')) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }   
}

const onCheckedSourcesChanged = (sender, args) =>{
    let container = document.getElementById('sources-checked-list');
    if (container || container.hasChildNodes()) {
        for (var child of container.childNodes) {
            child.remove();
          }
    }
    for (let x of this.checkedSources) {
        let item = createCheckedSource(x);
        container.appendChild(item);
    }
}

this.onCheckedSourcesChangedEvent = new MyEvent('onCheckedSourcesChanged');
this.onCheckedSourcesChangedEvent.register(onCheckedSourcesChanged);

this.srcFilter = {
}
this.checkedSources = new Set();


const fillSources = (filter)=> {
    dataService.getSourcesAsync(filter)
        .then(res=>{
            this.srcList = res.sources;
            this.srcList.map(obj=>{
                let item = createSourceItem(obj);
                let container = document.getElementsByClassName('sources-all');
                container[0].appendChild(item);
            });
        });
}


const createSourceItem = (item) => {
    let container = document.createElement('div');
    container.classList.add('source-item');
    container.id = item.id;
    let name = document.createElement('span');
    name.classList.add('source-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    container.appendChild(name);
    container.onclick = (event) =>{
        let isChecked = this.checkedSources.has(item);
        if (!isChecked) {
            container.classList.add('checked');
            this.checkedSources.add(item);
            this.onCheckedSourcesChangedEvent.invoke(container, item);
        } else {
            container.classList.remove('checked');
            this.checkedSources.delete(item);
            this.onCheckedSourcesChangedEvent.invoke(container, item);
        }
    };
    return container;
}

const createCheckedSource = (item) => {
    let container = document.createElement('div');
    container.classList.add('source-checked');
    let name = document.createElement('span');
    name.classList.add('source-checked-name');
    let nameText = document.createTextNode(item.name);
    name.appendChild(nameText);
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    let deleteText = document.createTextNode('delete');
    deleteBtn.appendChild(deleteText);
    deleteBtn.onclick = (event) =>{
        this.checkedSources.delete(item);
        this.onCheckedSourcesChangedEvent.invoke(deleteBtn, item);
    }
    container.appendChild(name);
    container.appendChild(deleteBtn);
    return container;
}

let src = fillSources({language: "en"});





