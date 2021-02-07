const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const liveReload = require('livereload')
const connect = require('connect-livereload')

app.use(connect());
app.use(express.static('public'));

const reloadServer = liveReload.createServer();
reloadServer.watch(path.join(__dirname, 'public'))

reloadServer.server.once('connection', ()=>{
    setTimeout(() => {
        reloadServer.refresh('/')
    }, 100)
})

app.get('/german', (req, res) => {
    res.send('German is super dope')
})

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})