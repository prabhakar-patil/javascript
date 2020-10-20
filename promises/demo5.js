console.log('Demo 5: Promise-Async-Await')

// promise definition
const calculate = (a, b, c) => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (a < 0 || b < 0 || c < 0)
			reject('Negative numbers are not allowed'); // code flow returns from here
		resolve(a+b+c);
	}, 1000);
})

const add = async () => {
	const sum1 = await calculate(1, 2, 3);
	const sum2 = await calculate(sum1, 4, 5);
	const sum3 = await calculate(sum2, 6, 7);
	const sum4 = await calculate(sum3, 8, 9);
	return sum4;
}

add().then(s => console.log(s)).catch(e => console.log(e));
