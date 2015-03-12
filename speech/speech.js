var yandex_speech = require('yandex-speech');
var fs = require('fs');
var text = fs.readFileSync('./speech.txt', {encoding: 'utf8'});

yandex_speech.TTS({
	text: text,
	file: 'speech.mp3'
}, function() {
	console.log('done');
});