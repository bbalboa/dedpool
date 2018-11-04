const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server listening on port 3000!"));