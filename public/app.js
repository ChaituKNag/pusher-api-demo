// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('3f065358ec6cba9dcd17', {
    cluster: 'us3',
    forceTLS: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
    console.log(JSON.stringify(data));
});
