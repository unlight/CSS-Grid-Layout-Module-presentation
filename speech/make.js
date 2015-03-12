  var tts = require('node-google-text-to-speech')
 
  tts.translate('en', 'dog', function(result) {
    console.log(result); 
    if(result.success) { //check for success 
        var response = { 'audio' : result.data };
        socket.emit('ttsResult', response); //emit the audio to client 
    }
  });



// var yandex_speech = require('yandex-speech');
// var fs = require("fs");
// var extname = require("path").extname;

// var path = ".";
// var dirs = fs.readdirSync(path);

// dirs.forEach(function(v) {
// 	if (extname(v) != "txt") continue;

// })

// yandex_speech.TTS({
//     text: fs.readFileSync("this.txt", {encoding: 'utf8'}),
//     file: 'this.mp3'
//     }, function() {
//         console.log('done');
//     }
// );
