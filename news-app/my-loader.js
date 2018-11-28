module.exports = (source) => {
    let removeNumbers = (object) => {
        for (var prop in object) {
            if (typeof object[prop] === "number") {
                object[prop] = undefined;
            }
            if (object.hasOwnProperty(prop)) {
                if (typeof object[prop] === "object") {
                    removeNumbers(object[prop]);
                }
            }
        }
    }
    //let jsonData = fs.readFileSync(source);
    let obj = JSON.parse(source);
    removeNumbers(obj);
    return JSON.stringify(obj);
    
    //fs.writeFileSync(source, ret);   
}

