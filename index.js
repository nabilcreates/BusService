let fetch = require("node-fetch");
let fs = require("fs");

fetch("https://raw.githubusercontent.com/cheeaun/busrouter-sg/master/data/3/stops.json")
.then(res => res.json())
.then(data => {
    let keys = Object.keys(data)
    let tempobj = {};
    keys.forEach(k => {
        let name = data[k].name.toString()
        tempobj[name] = k;
    })

    fs.writeFileSync("./data/json_name_code.json", JSON.stringify(tempobj));
})