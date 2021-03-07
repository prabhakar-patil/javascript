var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

// whenever someone connects to server, following lines gets executed
io.on('connection', function(socket) {
    console.log('An User Connected')

    //Send a message after a timeout of 2 seconds
    setTimeout(function() {
        socket.send('Sent a message 2 seconds after connection!');
    }, 2000);

   //Send a message when
   setTimeout(function() {
      //Sending an object when emmiting an event
      socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
   }, 4000);

    //whenever someone disconnects
    socket.on('disconnect', function() {
        console.log('An User Disconnected')
    })
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});

