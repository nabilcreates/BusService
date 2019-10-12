let fetch = require("node-fetch");
let fs = require("fs");


// Fetch data
fetch("https://raw.githubusercontent.com/cheeaun/busrouter-sg/master/data/3/stops.json")
.then(res => res.json())
.then(data => {

    // Key-ify FORMAT OF DATA: JSON[BUS_STOP_CODE]
    let keys = Object.keys(data)
    let tempobj = {};
    keys.forEach(k => {
        let name = data[k].name.toLowerCase().toString()
        tempobj[name] = k;
    })

    fs.writeFileSync("./data/json_name_code.json", JSON.stringify(tempobj));
})

fetch("https://raw.githubusercontent.com/cheeaun/busrouter-sg/master/data/3/stops.json")
.then(res => res.json())
.then(data => {
    fs.writeFileSync("./data/json_code_info.json", JSON.stringify(data));
})

fetch("https://raw.githubusercontent.com/cheeaun/busrouter-sg/master/data/3/stops.json")
.then(res => res.json())
.then(data => {
    let tempBusStopNames = [];
    let keys = Object.keys(data)

    keys.forEach(k => {
        let name = data[k].name.toLowerCase().toString()
        tempBusStopNames.push(name)
    })

    fs.writeFileSync("./data/json_name_void.json", JSON.stringify(tempBusStopNames));
})