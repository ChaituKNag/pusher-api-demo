var Pusher = require('pusher');
var express = require('express');
var app = express();

var path = require('path');
var dotenv = require('dotenv');

dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));
var channels_client = new Pusher({
    appId: '863471',
    key: '3f065358ec6cba9dcd17',
    secret: '234247e385a5bda13ed0',
    cluster: 'us3',
    encrypted: true
});

app.get('/message', (req, res) => {
    channels_client.trigger('my-channel', 'my-event', {
        "message": "hello world"
    });
    res.status(200).send('message sent at ' + Date.now());
})



app.listen(process.env.PORT || 3000, () => {
    console.log("app running now");
})