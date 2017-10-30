/*
Write a program that prints into console the numbers from 1 to 100.
But for multiples of three print "Miss" instead of the number and for the multiples of five print "Kiss".
For numbers which are multiples of both three and five print "MissKiss".
Each print must be asynchronous call console.log function with a 50ms delay between each print.
*/

(function() {
	"use strict;"

	var out, val,
		delay = 50;

	for(var i = 1; i < 101; i++) {
		out = "";

		if (i % 3 === 0) {
			out += "Miss"
		}

		if (i % 5 === 0) {
			out += "Kiss"
		}

		val = out || i;

		(function(i, val) {
			setTimeout(function() {
				console.log(val);
			}, i * delay);
		})(i, val);
	}
})();
