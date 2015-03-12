var tts = require('node-google-text-to-speech');
var split = require('split');
var fs = require('fs');
var through = require('through');

var count = 1;

var ttsPipe = through(function(chunk) {
	var stream = this;
	if (!chunk) return;
	if (chunk === '---') return;
	// chunk = chunk.trim().replace(/(\r|\n)/g, " ");
	var fn = (function(count) {
		return function(result) {
			if (result.success) {
				var b = new Buffer(result.audio, 'base64');
				fs.writeFileSync("./mp3/speech" + ("00" + count).slice(-3) + ".mp3", b);
				// fs.writeFile("speech" + (count++) + ".mp3", b, function(err) {
				// 	if (err) throw err;
				// 	stream.emit('data', chunk);
				// });
			} else {
				console.error("Failed " + chunk);
			}
		};
	})(count++);
	tts.translate('ru', chunk, fn);
});

fs.createReadStream("./speech.txt")
	.pipe(split())
	.pipe(ttsPipe)