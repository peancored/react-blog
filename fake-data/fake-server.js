const url = require("url");

// global settings
const express = require("express");
const fs = require("fs");
var cors = require('cors');
const app = express();
const port = 9000;

// data
const dataFolder = "./fake-data/data";

app.use(express.json(), cors());

app.get("/*", (req, res) => {
    var baseUrl = url.parse(req.url).pathname;
    baseUrl = baseUrl.substring(url.parse(req.url).pathname.lastIndexOf("/"));

    console.log("GET: " + baseUrl);

    const data = JSON.parse(fs.readFileSync(dataFolder + baseUrl + ".json", "utf8"));

    res.json(data);
});

app.listen(port, () => console.log(`Fake server listening for port: ${port}`));
