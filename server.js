const express = require('express');
const path = require('path');
const app = express();

app.listen(8090, function () {
    console.log('listening on 8090')
});

app.use(express.static(path.join(__dirname, 'react-repo/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-repo/build/index.html'));
});

//리액트에서 라우팅
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-repo/build/index.html'));
});