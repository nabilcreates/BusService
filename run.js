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
    let tempobj = [];
    let keys = Object.keys(data);

    for(let i = 0; i < keys.length; i++){
        let BUS_STOP_NAME = data[keys[i]].name;
        let BUS_STOP_CODE = keys[i];

        tempobj.push({
            "bus_stop_name": BUS_STOP_NAME,
            "bus_stop_code": BUS_STOP_CODE
        })
    }

     fs.writeFileSync("./data/object_name_code.json", JSON.stringify(tempobj));
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