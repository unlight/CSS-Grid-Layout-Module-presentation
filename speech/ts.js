var tts = require('node-google-text-to-speech');
var split = require('split');
var fs = require('fs');
var through = require('through');

var count = 1;

var text = "Что это? CSS Grid Layout это новая спецификация, новая модель разметки (layout), которая определяет двумерную сетку где элементы могут быть расположены в произвольных местах.";

tts.translate('ru', text, function(result) {
	if (result.success) {
		var b = new Buffer(result.audio, 'base64');
		fs.writeFile("speech" + (count++) + ".mp3", b, function(err) {
			if (err) throw err;
			// stream.emit('data', chunk);
		});
	} else {
		console.error(result);
	}
});