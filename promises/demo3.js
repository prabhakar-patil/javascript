console.log('Demo 3: Promise Usage. Function syntax in new way')
// promise definition
const calculate = (a, b, c) => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (a < 0 || b < 0 || c < 0)
			reject('Negative numbers are not allowed'); // code flow returns from here
		resolve(a+b+c);
	}, 2000);
})

// call function that returns promise
calculate(1, 2, 3).then((addition) => {
	console.log('From resolve(): addition: ', addition);
}).catch((rejectMsg) => {
	console.log('From reject(): messsage: ', rejectMsg);
});

// call for reject
calculate(-1, 2, 3).then((addition) => {
	console.log('From resolve(): addition: ', addition);
}).catch((rejectMsg) => {
	console.log('From reject(): messsage: ', rejectMsg);
});

