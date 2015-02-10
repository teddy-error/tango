var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write('Hell this is dog.');
    response.end();
    setTimeout(function(){
        response.write("Dog is finished!");
        response.end();
    }, 5000);
}).listen(1337);
console.log('Listening on 1337...');
