console.log('Demo 2: Promise Usage. Function syntax in tradition way')
// promise definition
const calculate = function(a, b, c) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (a < 0 || b < 0 || c < 0)
				reject('Negative numbers are not allowed'); //code flow return from here
			resolve(a+b+c);
		}, 2000);
	});
}

// call function that returns promise
calculate(1, 2, 3).then(function(addition) {
	console.log('From resolve(): addition: ', addition);
}).catch(function(rejectMsg) {
	console.log('From reject(): messsage: ', rejectMsg);
});

// call for reject
calculate(-1, 2, 3).then(function(addition) {
	console.log('From resolve(): addition: ', addition);
}).catch(function(rejectMsg) {
	console.log('From reject(): messsage: ', rejectMsg);
});

